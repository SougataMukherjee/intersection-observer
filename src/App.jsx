import "./App.css";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    //Creates a new instance of IntersectionObserver.
    const observer = new IntersectionObserver((entries) => {
      //Iterates over each entry(elements) in the entries array [section#one,section#two,section#three]
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
      });
    });
    //Creates a second IntersectionObserver instance with a similar callback function passing .box
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //Checks if the element is intersecting the viewport. If intersect the point add the "isVisible" class
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
        } else {
          entry.target.classList.remove("isVisible");
        }
      });
    });
    //Observes the element with the ID "one" "two" and "three". treshold represent intersecting point in the viewport
    observer.observe(document.querySelector("section#one", { treshold: 1 }));
    observer.observe(document.querySelector("section#two", { treshold: 1 }));
    observer.observe(document.querySelector("section#three", { treshold: 1 }));
    observer2.observe(
      document.querySelector(".box", { rootMargin: "0px", treshold: 0.5 })
    );
  }, []);

  return (
    <div className="App">
      <main>
        <section id="one">
          <div>
            <p>TEXT 1</p>
          </div>
        </section>
        <section id="two">
          <div>
            <p>TEXT 2</p>
          </div>
        </section>
        <div className="box">
          <h2>Above the 3rd div</h2>
        </div>
        <section id="three">
          <div>
            <p>TEXT 3</p>
          </div>
        </section>
      </main>
    </div>
  );
}
