## Documentation

#### MODULE

Collection of JS code which is private to itself. Exist independently of any other program.

##### require ("../path")

##### all the code of the module is wreapped inside a function

#### IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined

This is an JS Feature.

-- Solves Multiple Problems like

1.Keeps variable and function Safe. 2. Independant Code
3.does not interfare with code outside().

## FAQ

#### How are varible & funtion private in mode

IIFE and require (`statement`) -->wrap code in IIFE

#### How do u get access to module?

Node.js

(Funtion(`module,require`){ //module,require are hidden

    //code

})

()

## LibUV AND V8 JavaScript engine support

-- LibUV and V8 JavaScript Engine Support in Node.js
Node.js relies heavily on two critical components to achieve its high-performance, non-blocking I/O capabilities: LibUV and the V8 JavaScript engine.

### LibUV

LibUV is a cross-platform asynchronous I/O library that plays a crucial role in Node.js's architecture:

#### Event Loop Management: LibUV implements the event loop, which is the heart of Node.js's asynchronous processing model. It continuously monitors for tasks ready to be executed and processes them on the single thread 2.

#### Thread Pool: For computationally intensive tasks that cannot be completed immediately, LibUV uses a thread pool to handle them in the background, passing results back to the event loop once finished 2.

#### Cross-Platform Abstraction: LibUV provides consistent APIs for asynchronous I/O operations across different operating systems, enabling Node.js's cross-platform functionality 2.
