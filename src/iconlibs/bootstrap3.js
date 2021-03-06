import { AbstractIconLib } from '../iconlib';

export var bootstrap3Iconlib = AbstractIconLib.extend({
  mapping: {
    collapse: 'chevron-down',
    expand: 'chevron-right',
    "delete": 'remove',
    edit: 'pencil',
    add: 'plus',
    cancel: 'floppy-remove',
    save: 'floppy-saved',
    moveup: 'arrow-up',
    movedown: 'arrow-down',
    clear: 'remove-circle',
    time: 'time',
    calendar: 'calendar'
  },
  icon_prefix: 'glyphicon glyphicon-'
});
