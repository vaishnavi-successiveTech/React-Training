const HomePage = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        padding: "20px",
        maxWidth: "600px",
        margin: "50px auto",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }} >
      <h2>Welcome to Next.js Assignments</h2>
      <p>Click on any assignment above to get started!</p>
      <div>
        1.create two components: a parent component that acts as a provider and
        a child component that consumes the context. Create a context to manage
        a user's authentication status (logged in or out). Implement a login
        button in the child component that, when clicked, updates the
        authentication status in the context to "logged in." Display a message
        in the child component based on the user's authentication status. If the
        user is logged in,show "Welcome, [username]!" Otherwise, display
        "Please log in."
      </div>
      <div>
        2.Extend the previous application to demonstrate the use of nested
        contexts. Create a new context to manage user preferences (e.g., theme
        preference). Modify the parent component to provide both the
        authentication and preferences contexts. Create a child component that
        consumes both contexts. Allow the user to change their theme preference
        (light/dark) using a button in the child component. Display the theme
        preference in the UI and adjust the component's styling accordingly.
      </div>
      <div>
        3.creat pages: Home and About. Implement file routing. Create navigation
        links to switch between the Home and About pages. Display appropriate
        content on each page. Add a "404 Not Found" page for any invalid routes.
      </div>
      <div>
        4.Enhance the previous application by adding protected pages that
        require authentication. Create a login page with a form that accepts a
        username and password. Implement authentication logic (e.g., hardcode a
        username and password for now). Secure the About page so that it can
        only be accessed by authenticated users. Redirect unauthenticated users
        to the login page. Display a message on the Home page welcoming the
        authenticated user.
      </div>
      <div>
        5.Extend the application to include nested routes for a more complex
        user interface. Create a new section of your application (e.g., a
        Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
        Implement nested routing within this section using nested routes. Add
        navigation links to switch between the sub-pages within the Dashboard
        section. Customize the content displayed on each sub-page.
      </div>
    </div>
  );
};
export default HomePage;
