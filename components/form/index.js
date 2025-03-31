import React, { useState } from 'react';

const UserForm = () => {
  
  const [params, setParams] = useState({name: '', workcode: ''})

  handleChange = (event) => {
    const objValue = Object.assign(params, { [event.target.name]: event.target.value })
    setParams(objValue);
    // setParams({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit:',params);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          name="workcode"
          type="text"
          value={this.state.workcode}
          onChange={this.handleChange}
          placeholder="Workcode"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// class AdminForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: '', workcode: '' };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('handleSubmit:', this.state);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           name="name"
//           type="text"
//           value={this.state.name}
//           onChange={this.handleChange}
//           placeholder="Name"
//         />
//         <input
//           name="workcode"
//           type="workcode"
//           value={this.state.workcode}
//           onChange={this.handleChange}
//           placeholder="workcode"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }



import React, { useState } from 'react';
import { useForm } form './component/customHooks'

function UserForm() {
  const { values, handleChange } = useForm({ name: '', workcode: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="workcode"
        type="workcode"
        value={values.workcode}
        onChange={handleChange}
        placeholder="workcode"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function AdminForm() {
  const { values, handleChange } = useForm({ name: '', workcode: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="workcode"
        type="workcode"
        value={values.workcode}
        onChange={handleChange}
        placeholder="workcode"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

