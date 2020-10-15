# Working with Context and Hooks

In my experience, all the redux I encountered so far can be replaced by hooks and a global context. Using hooks and contexts can shorten the codebase considerably. 

## Creating a Context

First we have to create a global context that will store all the state in our application. For an example of global context you can see [/contexts/AppContext.js](https://github.com/nararya-anugraha/utilities/blob/master/src/contexts/AppContext.js).

We are using useState hooks to store all the data in the App:

```
const [state, setActualState] = useState(initialState);
```

I am using `setActualState()` for setter name because I want a different behaviour for the state setter: 

Just like class based setState, the `setState()` function only replaces the field described inside it. For eaxample if you have state `{a: 1, b: 2}` calling setState`({b: 3, c: 4})`  will result in the state being `{a:1, b:3, c:4}`

```    
const setState = useCallback(
  (newState) =>
    setActualState((prevState) => ({ ...prevState, ...newState })),
  []
);
```

## Installing the Context

If you look into [/App.js](https://github.com/nararya-anugraha/utilities/blob/master/src/App.js) you can see that Installing the context is as simple as using it as a Wrapper at the root of your App: 

```
<AppProvider>
  <div css={globalStyle}>
    <Routes />
  </div>
</AppProvider>
```

## Creating a Hook Linked to Context

Now we can use the AppContext to store data via hooks. In [/hooks/useUsers.js](https://github.com/nararya-anugraha/utilities/blob/master/src/hooks/useUsers.js) I'm using a dummy API that fetch fake user data. Here you can see that I also track the `loading` state of a remote data. 

```
const { state, setState } = useAppContext();
const { users = [], usersAreLoading = true } = state;
```

In the refresh function() I can just simply invoke setState to store the data from the API:

```
const refreshUsers = useCallback(() => {
  setState({ usersAreLoading: true });
  fetchUsers
    .then((newUsers) => setState({ users: newUsers }))
    .finally(() => setState({ usersAreLoading: false }));
}, [setState]);
```

I'm using Callback here because the refresh function is used as dependency in a useEffect bellow: 

```
useEffect(() => {
  refreshUsers();
}, [refreshUsers]);
```

This ensures that when useUsers() hooks is called for the first time, it will automatically fetch data from the API. For a second invocation of the useUsers(), it will then just fetch the data from the state.

We then return the object and loading state.

```
return {
  users,
  loading: usersAreLoading,
};
```

## Using the Hooks in Component

The hooks can then be used in a Component such as [/routes/ColorFinder](https://github.com/nararya-anugraha/utilities/blob/master/src/routes/ColorFinder/ColorFinder.js). As you can see, the use is straight forward: 

```
const { users, loading } = useUsers();

if (loading) {
  return <>Loading...</>;
}

return (...)
```

## Pitfalls and Caveat

While convenient, there are things you have to be careful about when using Contexts and Hooks. 

### Autoloading Hooks in Children

Suppose you have a component whose child invokes an autoLoading hook:

```
const Parent = () => {
   const {users} = useUsers(); 
   return <Child/>;
};
```

```
const Child = () => {
   const {users} = useUsers(); 
   return (/* omitted */);
};
```

If you check the network tab in your browser's developer tools you might see that the API is called twice. If this happens, it might be because the refresh function is modified more than once. Other than possibly causing error 429 it's an unecessary burden on the backend. There are a couple of ways of preventing this. 

First we can require the hook to load manually. We can take down the `useEffect()` in the hooks and expose the refresh function for the components to use

```
const Parent = () => {
   const { users, refresh } = useUsers();
   useEffect( () => { refresh() } , [ refresh ] );
   return <Child/>);
};
```

Alternatively we can block the children from being rendered if the hook is still loading: 

```
const Parent = () => {
  const { users, loading } = useUsers();
  if(loading) {
    return <Loader/>
  }
  return <Child/>);
};
```

### Autoloading Hooks With Parameter

Suppose you have an autoloading hook with parameter. If you are using the parameter in the fetch, you're bound to use the parameter as a dependency in `useEffect()`

```
const useUser = (userId) => {
  const refreshUser = useCallback(() => {
    setState({ userIsLoading: true });
    fetchUsers(userId)
      .then((newUser) => setState({ user: newUser }))
      .finally(() => setState({ userIsLoading: false }));
  }, [setState, userId]);
}
```

Then, suppose you call the hook with parameter in a Parent and Child:

```
const Parent = () => {
   const {userId} = useParams();
   const {user} = useUser(userId); 
   return <Child />;
};
```

```
const Child = () => {
   const {userId} = useParams();
   const {user} = useUser(userId); 
   return (/* omitted */);
};
```

In a lot of case this will cause an infinite useEffect() loop, because the userId gets reset again and again. In order to prevent that, you can change the hook in such way that when it is called without parameter, it would just return the data from the context: 

```
useEffect(() => {
  if (!userId) {
    return;
  }
  refreshUser();
}, [refreshUser, userId]);
```

Then in the children, you can call the hook without parameter
```
const Child = () => {
  const {userId} = useParams();
  const {user} = useUser(); 
  return (/* omitted */);
}
```