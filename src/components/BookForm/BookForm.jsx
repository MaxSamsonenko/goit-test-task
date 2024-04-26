import {
  Form,
  FormTitle,
  FormSubTitle,
  FormInput,
  FormTextArea,
  FormBtn,
} from './BookForm.styled';

const BookForm = () => {
  return (
    <Form>
      <FormTitle>Book your campervan now</FormTitle>
      <FormSubTitle>
        Stay connected! We are always ready to help you.
      </FormSubTitle>
      <FormInput type="text" id="name" placeholder="Name" />
      <FormInput type="email" id="email" placeholder="Email" />
      <FormInput type="date" id="date" placeholder="Booking date" />
      <FormTextArea type="text" id="comment" placeholder="Comment" />
      <FormBtn type="submit">Send</FormBtn>
    </Form>
  );
};
export default BookForm;
