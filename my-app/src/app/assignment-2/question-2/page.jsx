//Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import PersonForm from "@/components/PersonForm";

export  default function HomePage(){
    return(
        <>
        <PersonForm/>
        
        </>
    )
}