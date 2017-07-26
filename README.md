# Mars Rovers - Photo App
I
n this project, you will create an application using the NASA MARS ROVER API that will feature stateless and stateful components and use inline styling for your styles.

There are no starter files for this application.

## To Begin:  

* Use `create-react-app` to begin a new project.

* Set up your project with `components` and `styles` folders inside of your `src` directory.

* Be sure to link all style sheets and components together before starting.

* Empty out your `App.js` component of everything in the return statement besides the main `<div className="App">` and remove the `className="App"` from the `<div>`.

* **You will need to get an API key from the NASA API website.**

* You can put the reason for your request as anything you wish or leave it blank.

* NASA will populate your API KEY on the screen for you so you can copy and paste it as stated in the objectives for this project list below.

* [Get Your NASA API Key HERE](https://api.nasa.gov/index.html#apply-for-an-api-key)

## Objectives:  

* Create 3 components in addition to your `App` component each in a separate file in your `components` folder:

  1. `GetImageForm` should be a stateful smart class based component.

  2. Create a `const API_KEY = "your API key pasted here";` right after the import statements with your *own* **API KEY** Paste it over the "your API key pasted here".

  3. It should house both other components (listed below) and be the only component rendered in the `App` render method.

  4. In the `render` method it should return a form. The form should have two `select` elements and one `input` element. See the **HINTS** below to get the code.

  5. Each input will need an `onChange` function to handle grabbing the data when the button is clicked.

  6. There should be a method that is bound to `this` called `fetchRoverImage`.

  7. `fetchRoverImage` should use a `fetch` call to retrieve pictures from the NASA Mars Rover API.

  8. You should use a template literal to take the number (Sols) from your form, the Rover you wish to check for pictures from, and the camera on the rover you wish to access, and apply it to the API fetch call to retrieve photos from a specific rover on a specific day with a specific camera (see HINTS below).

1. `GetImageButton` should be a functional stateless component.

   * It should return a `<button>` and receive `props`. It should fire the `fetchRoverImage` function when clicked and return the images if there were any from that day.

2. `ImageDisplay`

   * this component should be a stateless functional component that receives the images, maps over them from props passed by the GetImageForm and displays them in a list fashion.

### STYLING  

You will need to practice using inline styles to style this application to look nice and presentable.

## Hints  

You will need to implement a form using two `<select>` inputs. Here is a sample for one. You will need to wire the `state` and `onChange` method to get it up and running for both.

```jsx
<label htmlFor="rover">Rover</label>
<select onChange={this.handleRover} id="rover" value={this.state.value}>
  <option value="Curiosity">Curiosity</option>
  <option value="Opportunity">Opportunity</option>
  <option value="Spirit">Spirt</option>
</select>
<label htmlFor="camera">Camera Type</label>
<select onChange={this.handleCamera} id="rover" value={this.state.value}>
  <option value="fhaz">FHAZ (Front Hazard)</option>
  <option value="rhaz">RHAZ (Rear Hazard)</option>
  <option value="navcam">NAVCAM (Navigation Cam)</option>
</select>
<label htmlFor="sol">Martian Sol: 1000-2000</label>
<input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
```

Your API `fetch` should have a URL that can dynamically update depending on the user selection. A quick way to do this in ES6 is by using template literals. Use the following code for a few different purposes.

  1. You can figure out the state you `GetImageForm` component will need.

  2. You can use the `imageUrl` variable to make your fetch requests.

```jsx
this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
let cam = this.state.camera;
let rove = this.state.rover;
let num = this.state.sol;

let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
```

Your state should provide a default value for drop down menus in case a user would submit without selecting an option.

```jsx
this.state = {
  rover: "Curiosity",
  camera: "FHAZ",
  images: [],
  sol: "",
}
```

The above code should live in your `fetchRoverImage` method.

## Hard Mode  

[NASA Mars Rover API](https://api.nasa.gov/api.html#MarsPhotos)

Use the NASA Mars Rover API docs to see the options for the query strings available. Add conditional statements to render `<select>` tags with the cameras available to the Rover that was chosen by the user.

Add other buttons with other API fetches from the Mars Rover API for different options.

## Results  

Once complete, your console should look like the following:

marsrover.gif