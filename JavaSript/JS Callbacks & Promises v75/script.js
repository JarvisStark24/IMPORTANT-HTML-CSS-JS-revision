console.log("Jarvis is alive!");
console.log("Ultorn is alive!");

setTimeout(() => {
    console.log("They are inside this computer!");
}, 2000);

console.log("Find them!");



const fn = () => {
    console.log("Nothing")
  }

const callback = (arg) => {
    console.log(arg);
    fn()
}

  

const loadScript =(src, callback) => {
  let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Jarvis", fn);
    document.head.append(sc);
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )