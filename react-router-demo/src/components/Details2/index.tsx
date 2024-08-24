/* eslint-disable no-dupe-args */
import React, { useState, useCallback } from "react";
import { sculptureList } from "./data";
import { useImmer } from "use-immer";

export var preFn = function () {};

export default function Details2() {
  return (
    <>
      {/* <MyComponent></MyComponent> */}
      {/* <Form></Form> */}
      {/* <Gallery></Gallery>
       */}
      <Form1></Form1>
    </>
  );
}

export function Form1() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e: { target: { value: string } }) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e: { target: { value: string } }) {
    updatePerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e: { target: { value: string } }) {
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e: { target: { value: string } }) {
    updatePerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

export function Gallery() {
  let [index, setIndex] = useState(0);

  function handleClick() {
    // index = index + 1;
    setIndex(index + 1);

    console.log("🚀 ~ handleClick ~ handleClick:", index);
  }

  let sculpture = sculptureList[index];
  console.log("🚀 ~ Gallery ~ index:", index);
  console.log("🚀 ~ Gallery ~ sculpture:", sculpture);

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children.key}</button>;
// }

export function Form() {
  const [value, setValue] = useState("Change me");

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   console.log("🚀 ~ handleChange ~ event:", event);
  //   setValue(event.currentTarget.value);
  // }
  function handleChange(event: any) {
    console.log("🚀 ~ handleChange ~ event:", event);
    setValue(event.currentTarget.value);
  }
  function onUploadImage(val: any) {
    console.log("🚀 ~ onUploadImage ~ onUploadImage:", val);
  }

  return (
    <>
      <button onClick={() => onUploadImage("click test ")}>Upload Image</button>
      <div data-wt-name={value}>{value}</div>
      <input value={value} onChange={handleChange} />
      <p>值： {value}</p>
      <img src="xx" alt="dd"></img>
    </>
  );
}

export function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("jack");
  // 缓存 increment 函数
  const increment = useCallback(() => {
    console.log("🚀 ~ MyComponent ~:increment useCallback");
    setCount(count + 1);
  }, [count]);

  // const increment = () => {
  //   console.log("🚀 ~ MyComponent ~ count: useCallback");
  //   setCount(count + 1);
  // };
  console.log(
    "🚀 ~ MyComponent ~ Object.is(preFn, increment):",
    Object.is(preFn, increment),
    preFn,
    increment
  );
  preFn = increment;

  const changeName = useCallback(() => {
    console.log("🚀 ~ MyComponent ~: changeName useCallback");
    setName(`${name}-${Math.random()}`);
  }, [name]);
  console.log("🚀 ~ MyComponent ~ count:", count, name, increment);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Name: {name}</p>
      <button onClick={changeName}>changeName</button>
    </div>
  );
}
