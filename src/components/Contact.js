import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import {TextInput, Select, Textarea, Button, Container, Icon} from 'react-materialize';
export default function Contact() {
  const { theme } = useContext(ThemeContext)
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='about'>
    <Container>
      <h3>Contact us</h3>
      <form onSubmit={handleSubmit}>
        <TextInput id="TextInput-38" label="Your Name" />
        <TextInput id="TextInput-39" label="Your Phone" />
        <TextInput email id="TextInput-41" label="Email" validate />
        <Select
          id="Select-46"
          multiple={false}
          onChange={function noRefCheck() {}}
          value=""
        >
          <option value="" disabled>
            Choose your favourite nation
          </option>
          <option value="1">England</option>
          <option value="2">France</option>
          <option value="3">Spain</option>
        </Select>
        <Textarea
          icon={<Icon>edit</Icon>}
          id="Textarea-28"
          label="Your content"
        ></Textarea>
        <Button>Submit</Button>
      </form>
    </Container>
    </div>
  );
}