import AppPage from "~/features/layout/components/AppPage";

function HomePage() {
  return (
    <AppPage testId="page-home">
      <div className="w-full bg-gradient-to-r from-blue-500 to-green-500 p-5 text-white">
        <h1>Home Page - Hero Section</h1>
      </div>
      <main className="container w-full py-2">
        <p>This is the home page.</p>
      </main>
    </AppPage>
  );
}

export default HomePage;
