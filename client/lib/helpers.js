// Thanks to Adam Brodzinski for this
// This replaces the deprecated React.addons.classSet. I wanted to keep my
// apps "pure" Meteor by not using browserify, so I went this route.
classNames = function classNames() {
  let classes = '';

  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];
    if (!arg) continue;

    let argType = typeof arg;

    if ('string' === argType || 'number' === argType) {
      classes += ' ' + arg;

    } else if (Array.isArray(arg)) {
      classes += ' ' + classNames.apply(null, arg);

    } else if ('object' === argType) {
      for (let key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes += ' ' + key;
        }
      }
    }
  }

  return classes.substr(1);
};
