### Timers Do Not Guarantee Precise Delay Times
- Since JavaScript's event loop operates on a single thread,
tasks in the Event Queue are only executed after all tasks in the Microtask Queue have been processed.

### Cases Where Timers Execute Later Than Expected
- When there are many tasks in the Microtask Queue
- When a synchronous task (Call Stack) takes a long time to execute