export default function({ store, redirect }) {
  if (!Object.keys(store.state.users.authUser).length) {
    redirect('/?message=noAuth')
  }
}
