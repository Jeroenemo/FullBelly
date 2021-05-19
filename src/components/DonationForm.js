import React, { useContext, useState } from 'react';
import { Context } from './../context/fullbellyContext';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Button, Card, Col , Form } from 'react-bootstrap';
import Loading from './Loading';


const DonationForm = ({ addDonation }) => {
  const {setView} = useContext(Context);
  
  const handleFormSubmission = async (event) => {
    event.preventDefault();
    event.persist();
    let lat;
    let lng;
    let query = (event.target.address.value + " " + event.target.city.value + " " + event.target.state.value + " " + event.target.zip.value).toString().replace(/ /g, '%20')
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.GOOGLE_API_KEY}`)
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
        address: event.target.address.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zip: event.target.zip.value,
        lat: lat,
        lng: lng
      });
    return setView('home')
  }

  return (
    <>
    <Card className="form-card">
      <Form onSubmit={handleFormSubmission}>
        <Form.Row>
          <Form.Group as={Col} controlId="donor">
            <Form.Label>Contact or Organization</Form.Label>
            <Form.Control type="text" placeholder="Who are you?" />
          </Form.Group>

          <Form.Group as={Col} controlId="donation">
            <Form.Label>Donation</Form.Label>
            <Form.Control type="text" placeholder="What are you donating?" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>WA</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
    </>
  );
}

export default withAuthenticationRequired(DonationForm, {
  onRedirecting: () => <Loading />,
});