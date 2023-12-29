import React from 'react';
import './App.css';
import Info from './Info';
import Plans from './Plans';
import AddOns from './AddOns';
import Total from './Total';
import ThankYou from './ThankYou';
import { useReducer } from 'react';

function App() {
  
  const [state, dispatch] = useReducer((state,action) => {
    switch (action.type) {
      case 'name-update':
        return {
          ...state,
          name: action.payload.name,
          nameError: action.payload.error,
        };
      case 'email-update':
        return {
          ...state,
          email: action.payload.email,
          emailError: action.payload.error,
        };
      case 'phone-update':
        return {
          ...state,
          phoneNo: action.payload.phoneNo,
          phoneNoError: action.payload.error,
        };
      case 'plan-update':
        return {
          ...state,
          plan: action.payload.plan,
        };
      case 'addOn-OnlineService-update':
        return {
          ...state,
          onlineService: action.payload.onlineService,
        };
      case 'addOn-extraSpace-update':
        return {
          ...state,
          extraSpace: action.payload.extraSpace,
        };
      case 'addOn-theme-update':
        return {
          ...state,
          theme: action.payload.theme,
        };
      case 'plan-monthly_OR_yearly':
        return {
          ...state,
          monthly_OR_yearly: action.payload.monthly_OR_yearly,
        };
      default:
        return state;
      }
  }, {
    name: "",
    email: "",
    phoneNo: "",
    plan: "Arcade",
    addOns: "",
    total: "",
    touched: true,
    error: null,
    onlineService: false,
    extraSpace: false,
    theme: false,
    monthly_OR_yearly: false,
    monthlyRates: {
      arcade: 9,
      advanced: 12,
      pro: 15,
      onlineService: 1,
      extraSpace: 2,
      theme: 2
    },
    yearlyRates: {
      arcade: 90,
      advanced: 120,
      pro: 150,
      onlineService: 10,
      extraSpace: 20,
      theme: 20
    }
  });
  console.log(state);
  
  const [isVisible, setVisibility] = React.useState('Info');
  const [btnBg, setBtnBg] = React.useState(
    {
      button1: {backgroundColor: "hsl(206, 94%, 87%)", color: 'black'},
      button2: {backgroundColor: "hsl(213, 96%, 18%)", color: 'white'},
      button3: {backgroundColor: "hsl(213, 96%, 18%)", color: 'white'},
      button4: {backgroundColor: "hsl(213, 96%, 18%)", color: 'white'}
    });
  
  function toggleVisibility(componentName, buttonName) {
    setVisibility((prevState) => 
      prevState === componentName ? null : componentName
    );
    
    setBtnBg((prevBgColor) => {
      const updatedBgColors = {};
      // Set the clicked button to light blue
      updatedBgColors[buttonName] = { backgroundColor: 'hsl(206, 94%, 87%)', color: 'black' };
      // Set other buttons to dark blue
      Object.keys(prevBgColor).forEach((name) => {
        if (name !== buttonName) {
          updatedBgColors[name] = { backgroundColor: 'hsl(213, 96%, 18%)', color: 'white' };
        }
      });
      return updatedBgColors;
    });
  console.log(btnBg);
};

  function onSubmit(event){
      event.preventDefault();
      console.log("submitted!");
  }

  return (
    <main>
    {/* Sidebar start */}
      <section className="gr">
        <div className="sidebar">
          <div>
            <button className="btn-nav active:bg-blue-100" type="button" name='button1' onClick={() => toggleVisibility('Info', 'button1')} style={btnBg.button1}>1</button>
            <div className="gr-navDiv">
              <p className="step">Step 1</p>
              <h3 className="form-title">Your info</h3>
            </div>
          </div>  
          <div>
            <button className="btn-nav" type="button" name='button2' onClick={() => toggleVisibility('Plans', 'button2')} style={btnBg.button2}>2</button>
            <div className="gr-navDiv">
              <p className="step">Step 2</p>
              <h3 className="form-title">Select plan</h3>
            </div>
          </div>
          <div>
            <button className="btn-nav" type="button" name='button3' onClick={() => toggleVisibility('AddOns', 'button3')} style={btnBg.button3}>3</button>
            <div className="gr-navDiv">
              <p className="step">Step 3</p>
              <h3 className="form-title">Add-ons</h3>
            </div>
          </div>
          <div>
            <button className="btn-nav" type="button" name='button4' onClick={() => toggleVisibility('Total', 'button4')} style={btnBg.button4}>4</button>
            <div className="gr-navDiv">
              <p className="step">Step 4</p>
              <h3 className="form-title">Summary</h3>
            </div>
          </div>
        </div>
    {/* Sidebar end */} 

      {isVisible === 'Info' && 
        <Info 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameNext = {'Plans'}        
          dispatch = {dispatch}
          state = {state}
        />}
      {isVisible === 'Plans' && 
        <Plans 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'Info'}
          componentNameNext = {'AddOns'}               
          dispatch = {dispatch}
          state = {state}
        />}
      {isVisible === 'AddOns' && 
        <AddOns 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'Plans'}
          componentNameNext = {'Total'}                
          dispatch = {dispatch}
          state = {state}
        />}
      {isVisible === 'Total' && 
        <Total 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'AddOns'}
          componentNameNext = {'ThankYou'}                
          dispatch = {dispatch}
          state = {state}
          onSubmit = {onSubmit}
        />}

      {isVisible === 'ThankYou' && 
      <ThankYou 
        isVisible = {isVisible}
        makeVisible = {toggleVisibility}
      />}

    </section>
  </main>
  );
}

export default App;
