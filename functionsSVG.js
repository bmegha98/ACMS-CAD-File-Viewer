function loadSVG() 
{
    var object = document.getElementById('svg_object');
    var svgObject = object.contentDocument;
    
    var style = svgObject.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = '@import url("cssSVG.css");';

    var svg = svgObject.getElementsByTagName('svg')[0];
    svg.insertBefore(style,svg.firstChild);
    
    object.width = svg.getAttribute('width');
    object.height = svg.getAttribute('height');
    
    var element = svg.getElementsByTagName('*');
    var i;
    for(i = 0; i < element.length; i++)
    {
        element[i].addEventListener("click", function()
        {
            if(svg.getElementById(this.id) != null)
            {
                svg.getElementById(this.id).style.stroke = 'red';
                svg.getElementById(this.id).style["stroke-width"] = "2";
            }
        });
    }
}


function applyCSS()
{
    var square = document.getElementById("svgID").value;
    var svgObject = document.getElementById('svg_object').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    var element = svg.getElementById(square);

    if(element == null)
        alert("No such element exists!!");
    else
      {
      //for particular square
      if(element.tagName === 'g')
      {
          var parts = element.getElementsByTagName("*");
          var i;
          for(i= 0;i < parts.length;i++)
          {
              //parts[i].setAttribute('class','change')
              parts[i].classList.add('change');
              parts[i].classList.remove('path_change');
              //parts[i].style.stroke = "salmon";
              //parts[i].style["stroke-width"] = "2";
              window.scrollTo(parts[i].getAttribute('x') - 200, parts[i].getAttribute('y') - 200);
          }
      }
      //for particular path
      else
      {
          //element.setAttribute('class','path_change');
          element.classList.add('path_change');
          // element.style.stroke = "lightgreen";
          // element.style["stroke-width"] = "2";

          window.scrollTo(element.getAttribute('x') - 200, element.getAttribute('y') - 200);
      }
  }
}
