import React, { useContext, useState } from 'react';
import { Context } from './../context/fullbellyContext';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Button, Col , Form } from 'react-bootstrap';
import Loading from './Loading';
import './../styles/DonationForm.css';
import 'react-datepicker/dist/react-datepicker.css';


const DonationForm = ({ addDonation }) => {
  const { user } = useAuth0();
  const {setView} = useContext(Context);
  
  const handleFormSubmission = async (event) => {
    event.preventDefault();
    console.log(typeof startDate)
    event.persist();
    let lat;
    let lng;
    let query = (event.target.address.value + " " + event.target.city.value + " " + event.target.state.value + " " + event.target.zip.value).toString().replace(/ /g, '%20')
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          lat = jsonifiedResponse.results[0].geometry.location.lat
          lng = jsonifiedResponse.results[0].geometry.location.lng
        })
      .catch((error) => {
        console.log(error)
      })
      await addDonation({
        donor: event.target.donor.value,
        donationName: event.target.donation.value,
        quantity: event.target.quantity.value,
        description: event.target.quantity.value,
        address: event.target.address.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zip: event.target.zip.value,
        date: event.target.date.value.slice(5, 10),
        startTime: event.target.startTime.value,
        endTime: event.target.endTime.value,
        lat: lat,
        lng: lng,
        user: user.name
      });
      console.log(event.target.startTime.value)
    return setView('home')
  }

  return (
    <>
      <Form onSubmit={handleFormSubmission}>
        <Form.Row>
          <Form.Group as={Col} controlId="donor">
            <Form.Label>Contact or Organization</Form.Label>
            <Form.Control type="text" placeholder="Who are you?" required />
          </Form.Group>

          <Form.Group as={Col} controlId="donation">
            <Form.Label>Donation</Form.Label>
            <Form.Control type="text" placeholder="What are you donating?" required />
          </Form.Group>

          <Form.Group as={Col} controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="text" placeholder="How many servings?" required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe your donation" required />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control className="picker" type="date" name="date" required />
          </Form.Group>

          <Form.Group as={Col} controlId="startTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control className="picker" type="time" name="startTime" required />
          </Form.Group>

          <Form.Group as={Col} controlId="endTime">
            <Form.Label>End Time</Form.Label>
            <Form.Control className="picker" type="time" name="endTime" required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" required />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Seattle" required />
          </Form.Group>

          <Form.Group as={Col} controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." required >
              <option>Choose...</option>
              <option>WA</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control required />
          </Form.Group>
        </Form.Row>
          
        <Button className="form-button" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default withAuthenticationRequired(DonationForm, {
  onRedirecting: () => <Loading />,
});