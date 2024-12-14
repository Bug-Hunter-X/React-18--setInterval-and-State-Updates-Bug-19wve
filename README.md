# React 18+ setInterval and State Updates Bug

This repository demonstrates a common bug encountered when upgrading to React 18 and above, related to the interaction between `setInterval` and state updates.  React 18 introduced automatic batching of state updates to improve performance, but this can lead to unexpected behavior if not handled correctly.

The bug is reproduced in `bug.js`. The solution is provided in `bugSolution.js`.