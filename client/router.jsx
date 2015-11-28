FlowRouter.route('/', {
  name: 'home',
  action() {
    ReactLayout.render(Layout, {content: <Home />});
  }
});
