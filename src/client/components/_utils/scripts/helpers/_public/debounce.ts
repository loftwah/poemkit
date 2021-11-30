
/*
* Debounce
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Function}       - Returns a new function.
*/  
function debounce( fn, limit = 300 ) {
    let timer;
    return function() {
    
        //Every time this returned function is called, the timer is cleared to ensure that fn is not executed
        clearTimeout(timer);

        // When the returned function is called for the last time (that is the user stops a continuous operation)
        // Execute fn after another delay milliseconds
        timer = setTimeout(function(this: any) {
            fn.apply(this, arguments);
        }, limit);
    }
};


export default debounce;