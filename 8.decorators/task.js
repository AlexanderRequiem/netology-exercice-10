function cachingDecoratorNew(func) {
  // Ваш код
  const cache = [];

  return function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash.length===hash.length && item.hash === hash);
    if (objectInCache !== undefined) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args); 
    cache.push({hash: hash, value: result}); 
    if (cache.length > 5) { 
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result; 
  }
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timerId = null;

  function wrapper(...args) {
    wrapper.allCount++;

    if (wrapper.flagFirstCall) {
      wrapper.count++;
      wrapper.flagFirstCall = false;
      return func(...args);
    }

    if (timerId !== null) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => { 
      wrapper.count++;
      func.apply(this, args); 
    }, ms);
  }

  wrapper.flagFirstCall = true;
  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}

