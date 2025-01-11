import AppPage from "~/features/layout/components/AppPage";

function ContactPage() {
  return (
    <AppPage testId="page-contact">
      <div className="w-full bg-gradient-to-r from-blue-500 to-green-500 p-5 text-white">
        <h1>Contact Page - Hero Section</h1>
      </div>
      <main className="container w-full py-2">
        <p>This is the contact page.</p>
      </main>
    </AppPage>
  );
}

export default ContactPage;
