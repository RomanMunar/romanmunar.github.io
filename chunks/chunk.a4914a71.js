const t=document.querySelector("#nav"),s=new IntersectionObserver(([e])=>e.target.classList.toggle("isStick",e.intersectionRatio<1),{threshold:[1]});s.observe(t);
