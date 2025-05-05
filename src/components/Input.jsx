import React from 'react';
import styled from 'styled-components';

//input component for forms
const Input = ({label, onChange, value}) => {
  return (
    <StyledWrapper>
      <div className="group">
        <input required type='text' className="input" name={label} onChange={onChange} value = {value}/>
        <span className="bar" />
        <label>{label}</label>
      </div>
    </StyledWrapper>
  );
}

//In-jsx styling
const StyledWrapper = styled.div`
  .group {
    position: relative;
  }

  .input {
    font-size: 1rem; /* 16px */
    padding: 0.625rem 0.625rem 0.625rem 0.3125rem; /* 10px 10px 10px 5px */
    display: block;
    width: 12.5rem; /* 200px */
    border: none;
    border-bottom: 0.0625rem solid #515151; /* 1px */
    background: transparent;
  }

  .input:focus {
    outline: none;
  }

  label {
    text-align: center;
    color: #383c47;
    font-size: 1.125rem; /* 18px */
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.3125rem; /* 5px */
    top: 0.625rem; /* 10px */
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .input:focus ~ label, .input:valid ~ label {
    top: -1.25rem; /* -20px */
    font-size: 0.875rem; /* 14px */
    color: rgb(52, 218, 165);
  }

  .bar {
    position: relative;
    display: block;
    width: 12.5rem; /* 200px */
  }

  .bar:before, .bar:after {
    content: '';
    height: 0.125rem; /* 2px */
    width: 0;
    bottom: 0.0625rem; /* 1px */
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  .input:focus ~ .bar:before, .input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 6.25rem; /* 100px */
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  .input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #5264AE;
    }

    to {
      width: 0;
      background: transparent;
    }
  }
`;

export default Input;
