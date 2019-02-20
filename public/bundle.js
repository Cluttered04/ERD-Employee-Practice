(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

let HTMLString = "";

function fetchEmployee() {
  fetch("http://localhost:8088/employees?_expand=department&_expand=computer", {}).then(response => response.json()).then(parsedResponse => {
    parsedResponse.forEach(employee => {
      console.log(employee.departments);
      document.querySelector("#employee-information").innerHTML += `<article class="employee">
            <header class="employee__name">
                <h1>${employee.name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${employee.department.name} department
            </section>
            <section class="employee__computer">
                Currently using the ${employee.computer.name} computer.
            </section>
        </article>`;
      console.log(HTMLString);
    });
  });
}

fetchEmployee(); // const employeeString = fetchEmployee();
// console.log(employeeString);
// document.querySelector("#employee-information").innerHTML = fetchEmployee();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksVUFBVSxHQUFHLEVBQWpCOztBQUNBLFNBQVMsYUFBVCxHQUF3QjtBQUNwQixFQUFBLEtBQUssQ0FBQyxxRUFBRCxFQUF3RSxFQUF4RSxDQUFMLENBQ0MsSUFERCxDQUNNLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURsQixFQUVDLElBRkQsQ0FFTyxjQUFELElBQW9CO0FBQ3RCLElBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBd0IsUUFBRCxJQUFjO0FBQ2pDLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFRLENBQUMsV0FBckI7QUFDQSxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLHVCQUF2QixFQUFnRCxTQUFoRCxJQUE4RDs7c0JBRXBELFFBQVEsQ0FBQyxJQUFLOzs7K0JBR0wsUUFBUSxDQUFDLFVBQVQsQ0FBb0IsSUFBSzs7O3NDQUdsQixRQUFRLENBQUMsUUFBVCxDQUFrQixJQUFLOzttQkFSakQ7QUFXSixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUNDLEtBZEQ7QUFlSCxHQWxCRDtBQW1CQzs7QUFFRCxhQUFhLEcsQ0FFakI7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IEhUTUxTdHJpbmcgPSBcIlwiO1xyXG5mdW5jdGlvbiBmZXRjaEVtcGxveWVlKCl7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/X2V4cGFuZD1kZXBhcnRtZW50Jl9leHBhbmQ9Y29tcHV0ZXJcIiwge30pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigocGFyc2VkUmVzcG9uc2UpID0+IHtcclxuICAgICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKChlbXBsb3llZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbXBsb3llZS5kZXBhcnRtZW50cylcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1pbmZvcm1hdGlvblwiKS5pbm5lckhUTUwgKz0gYDxhcnRpY2xlIGNsYXNzPVwiZW1wbG95ZWVcIj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImVtcGxveWVlX19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+JHtlbXBsb3llZS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19kZXBhcnRtZW50XCI+XHJcbiAgICAgICAgICAgICAgICBXb3JrcyBpbiB0aGUgJHtlbXBsb3llZS5kZXBhcnRtZW50Lm5hbWV9IGRlcGFydG1lbnRcclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19jb21wdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgQ3VycmVudGx5IHVzaW5nIHRoZSAke2VtcGxveWVlLmNvbXB1dGVyLm5hbWV9IGNvbXB1dGVyLlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9hcnRpY2xlPmBcclxuICAgICAgICBjb25zb2xlLmxvZyhIVE1MU3RyaW5nKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaEVtcGxveWVlKCk7XHJcblxyXG4vLyBjb25zdCBlbXBsb3llZVN0cmluZyA9IGZldGNoRW1wbG95ZWUoKTtcclxuLy8gY29uc29sZS5sb2coZW1wbG95ZWVTdHJpbmcpO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWVlLWluZm9ybWF0aW9uXCIpLmlubmVySFRNTCA9IGZldGNoRW1wbG95ZWUoKTtcclxuIl19
