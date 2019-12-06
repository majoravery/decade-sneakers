(function(){var l="We could not detect the separator.",n="Please upload a file or type in something.",r="Could not detect header. Ensure first row cotains your column headers.",u=[",",";","\t"],t={",":"comma",";":"semicolon","\t":"tab"};function e(e,o){if(o||(o={}),0==e.length)throw n;var c=o.separator||function(l){var n,r={};return u.forEach(function(u,t){var e=new RegExp(u,"g");r[u]=(l.match(e)||[]).length,n=!n||r[u]>r[n]?u:n}),n}(e);if(!c)throw l;var h=[];try{h=a.parse(e,t[c])}catch(l){var s=e.lastIndexOf("\n",l.offset),i=e.indexOf("\n",l.offset),f=e.substring(s>=-1?s:0,i>-1?i:e.length);throw l.message+" On line "+l.line+" and column "+l.column+".\n"+f}o.transpose&&(h=function(){var l=[].slice.call(arguments);return l.reduce(function(l,n){return l.length>n.length?l:n},[]).map(function(n,r){return l.map(function(l){return l[r]})})}.apply(this,h));var p=h.shift();if(0==p.length)throw r;p=function(l){for(var n={},r=0;r<l.length;r++)void 0===n[t=l[r]]?n[t]=0:n[t]++;var u=[];for(r=l.length-1;r>=0;r--){var t;n[t=l[r]]>0&&(t=t+"__"+n[t]--),u.unshift(t)}return u}(p=p.map(function(l){return l.trim().replace(/(^")|("$)/g,"")}));for(var v=o.hash?{}:[],g=0;g<h.length;g++){for(var d,m={},A=0;A<p.length;A++){var x=(h[g][A]||"").trim().replace(/(^")|("$)/g,""),y=""===x?NaN:x-0;if(o.hash&&0==A)d=x;else if(o.parseJSON||o.parseNumbers&&!isNaN(y))try{m[p[A]]=JSON.parse(x)}catch(l){m[p[A]]=x}else m[p[A]]=x}o.hash?v[d]=m:v.push(m)}return v}var a=function(){function l(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var n={parse:function(n,r){var u={comma:function(){var l,n,r,u;r=t,u=t,null!==(l=(p=",")?"":null)&&null!==(n=h())?l=[l,n]:(l=null,t=u);null!==l&&(e=l[1],l=e);var e;null===l&&(t=r);return l},semicolon:function(){var l,n,r,u;r=t,u=t,null!==(l=(p=";")?"":null)&&null!==(n=h())?l=[l,n]:(l=null,t=u);null!==l&&(e=l[1],l=e);var e;null===l&&(t=r);return l},tab:function(){var l,n,r,u;r=t,u=t,null!==(l=(p="\t")?"":null)&&null!==(n=h())?l=[l,n]:(l=null,t=u);null!==l&&(e=l[1],l=e);var e;null===l&&(t=r);return l},sv:h,line:s,field:i,char:f};if(void 0!==r){if(void 0===u[r])throw new Error("Invalid rule name: "+l(r)+".")}else r="comma";var t=0,e=0,a=0,o=[];function c(l){t<a||(t>a&&(a=t,o=[]),o.push(l))}function h(){var l,r,u,a,o,h,i,f,p,v,g;for(h=t,i=t,l=[],/^[\n\r]/.test(n.charAt(t))?(r=n.charAt(t),t++):(r=null,0===e&&c("[\\n\\r]"));null!==r;)l.push(r),/^[\n\r]/.test(n.charAt(t))?(r=n.charAt(t),t++):(r=null,0===e&&c("[\\n\\r]"));if(null!==l)if(null!==(r=s())){if(u=[],f=t,p=t,/^[\n\r]/.test(n.charAt(t))?(o=n.charAt(t),t++):(o=null,0===e&&c("[\\n\\r]")),null!==o)for(a=[];null!==o;)a.push(o),/^[\n\r]/.test(n.charAt(t))?(o=n.charAt(t),t++):(o=null,0===e&&c("[\\n\\r]"));else a=null;for(null!==a&&null!==(o=s())?a=[a,o]:(a=null,t=p),null!==a&&(a=a[1]),null===a&&(t=f);null!==a;){if(u.push(a),f=t,p=t,/^[\n\r]/.test(n.charAt(t))?(o=n.charAt(t),t++):(o=null,0===e&&c("[\\n\\r]")),null!==o)for(a=[];null!==o;)a.push(o),/^[\n\r]/.test(n.charAt(t))?(o=n.charAt(t),t++):(o=null,0===e&&c("[\\n\\r]"));else a=null;null!==a&&null!==(o=s())?a=[a,o]:(a=null,t=p),null!==a&&(a=a[1]),null===a&&(t=f)}if(null!==u){for(a=[],/^[\n\r]/.test(n.charAt(t))?(o=n.charAt(t),t++):(o=null,0===e&&c("[\\n\\r]"));null!==o;)a.push(o),/^[\n\r]/.test(n.charAt(t))?(o=n.charAt(t),t++):(o=null,0===e&&c("[\\n\\r]"));null!==a?l=[l,r,u,a]:(l=null,t=i)}else l=null,t=i}else l=null,t=i;else l=null,t=i;return null!==l&&(v=l[1],(g=l[2]).unshift(v),l=g),null===l&&(t=h),l}function s(){var l,r,u,a,o,h,s,f,v,g,d;if(h=t,s=t,null!==(l=i())){for(r=[],f=t,v=t,n.length>t?(u=n.charAt(t),t++):(u=null,0===e&&c("any character")),null!==u&&null!==(a=u==p?"":null)&&null!==(o=i())?u=[u,a,o]:(u=null,t=v),null!==u&&(u[0],u=u[2]),null===u&&(t=f);null!==u;)r.push(u),f=t,v=t,n.length>t?(u=n.charAt(t),t++):(u=null,0===e&&c("any character")),null!==u&&null!==(a=u==p?"":null)&&null!==(o=i())?u=[u,a,o]:(u=null,t=v),null!==u&&(u[0],u=u[2]),null===u&&(t=f);null!==r&&null!==(u=l||r.length?"":null)?l=[l,r,u]:(l=null,t=s)}else l=null,t=s;return null!==l&&(g=l[0],(d=l[1]).unshift(g),l=d),null===l&&(t=h),l}function i(){var l,r,u,a,o,h;if(a=t,o=t,34===n.charCodeAt(t)?(l='"',t++):(l=null,0===e&&c('"\\""')),null!==l){for(r=[],u=f();null!==u;)r.push(u),u=f();null!==r?(34===n.charCodeAt(t)?(u='"',t++):(u=null,0===e&&c('"\\""')),null!==u?l=[l,r,u]:(l=null,t=o)):(l=null,t=o)}else l=null,t=o;if(null!==l&&(l=l[1].join("")),null===l&&(t=a),null===l){for(a=t,l=[],o=t,h=t,/^[^\n\r]/.test(n.charAt(t))?(r=n.charAt(t),t++):(r=null,0===e&&c("[^\\n\\r]")),null!==r&&null!==(u=r!=p?"":null)?r=[r,u]:(r=null,t=h),null!==r&&(r=r[0]),null===r&&(t=o);null!==r;)l.push(r),o=t,h=t,/^[^\n\r]/.test(n.charAt(t))?(r=n.charAt(t),t++):(r=null,0===e&&c("[^\\n\\r]")),null!==r&&null!==(u=r!=p?"":null)?r=[r,u]:(r=null,t=h),null!==r&&(r=r[0]),null===r&&(t=o);null!==l&&(l=l.join("")),null===l&&(t=a)}return l}function f(){var l,r,u,a;return u=t,a=t,34===n.charCodeAt(t)?(l='"',t++):(l=null,0===e&&c('"\\""')),null!==l?(34===n.charCodeAt(t)?(r='"',t++):(r=null,0===e&&c('"\\""')),null!==r?l=[l,r]:(l=null,t=a)):(l=null,t=a),null!==l&&(l='"'),null===l&&(t=u),null===l&&(/^[^"]/.test(n.charAt(t))?(l=n.charAt(t),t++):(l=null,0===e&&c('[^"]'))),l}var p=",",v=u[r]();if(null===v||t!==n.length){var g=Math.max(t,a),d=g<n.length?n.charAt(g):null,m=function(){for(var l=1,r=1,u=!1,e=0;e<Math.max(t,a);e++){var o=n.charAt(e);"\n"===o?(u||l++,r=1,u=!1):"\r"===o||"\u2028"===o||"\u2029"===o?(l++,r=1,u=!0):(r++,u=!1)}return{line:l,column:r}}();throw new this.SyntaxError(function(l){l.sort();for(var n=null,r=[],u=0;u<l.length;u++)l[u]!==n&&(r.push(l[u]),n=l[u]);return r}(o),d,g,m.line,m.column)}return v},toSource:function(){return this._source},SyntaxError:function(n,r,u,t,e){this.name="SyntaxError",this.expected=n,this.found=r,this.message=function(n,r){var u;switch(n.length){case 0:u="end of input";break;case 1:u=n[0];break;default:u=n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}return"Expected "+u+" but "+(r?l(r):"end of input")+" found."}(n,r),this.offset=u,this.line=t,this.column=e}};return n.SyntaxError.prototype=Error.prototype,n}();"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=e),exports.csv2json=e):(this.CSVJSON||(this.CSVJSON={}),this.CSVJSON.csv2json=e)}).call(this);

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', pipeline.bind(this));

function pipeline(e) {
  let value = e.target.value;
  value = csvToJson(value);
  value = jsonToData(value);
  value = generateHtml(value);
  const html = document.createTextNode(value);
  document.getElementById('output').value = value;
}

function csvToJson(csv) {
  const options = { 
    separator: ',',
    transpose: true,
    hash: true,
  }
  return this.CSVJSON.csv2json(csv, options);
}

function jsonToData(json) {
  return Object.keys(json).map(y => {
    const {
      hero_shoe_image_url: heroShoeImageUrl,
      hero_shoe_name: heroShoeName,
      hero_shoe_copy: heroShoeCopy,
      moment_copy: momentCopy,
    } = json[y];
    const runnerUps = [];
    
    [...Array(9).keys()]
      .map(k => k + 1)
      .map(n => {
        const runnerUp = {
          imageUrl: json[y][`runner_up_shoe_image_url_${n}`],
          copy: json[y][`runner_up_shoe_copy_${n}`],
          name: json[y][`runner_up_shoe_name_${n}`],
        };
        runnerUps.push(runnerUp);
      });

    return {
      year: y,
      heroShoeImageUrl,
      heroShoeName,
      heroShoeCopy,
      momentCopy,
      runnerUps,
    };
  });
}

function generateHtml(data) {
  const all = data.map(d => {
    const runnerUpHtml = d.runnerUps.map(r => `<div class="runner-up">
      <div class="runner-up-image"><img src="${r.imageUrl}" /></div>
      <div class="runner-up-info">
        <h3 class="runner-up-name">${r.name}</h3>
        <p class="runner-up-copy">${r.copy}</p>
      </div>
    </div>`);

    const html = `<section class="" id="${d.year}">
  <h2 class="section-header">${d.year}</h2>
  <div class="hero-image"><img src="${d.heroShoeImageUrl}" alt="${d.heroShoeName}" /></div>
  <div class="hero-info">
    <h3 class="hero-shoe-name">${d.heroShoeName}</h3>
    <p class="hero-shoe-copy">${d.heroShoeCopy}</p>
  </div>
  <div class="runner-ups">
    ${runnerUpHtml.join('')}
  </div>
  <div class="moment">
    <h3 class="moment-header">Moment</h3>
    <p class="moment-copy">${d.momentCopy}</p>
  </div>
</section>`;

    return html;
  });
  
  return all.join('');
}

// module.exports = {
//   jsonToData,
//   generateHtml,
// }
