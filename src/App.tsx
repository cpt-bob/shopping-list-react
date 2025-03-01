import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Calendar from "./pages/Calendar";
import ShoppingList from "./pages/ShoppingList";
import MealPrep from "./pages/MealPrep";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="shopping-list" element={<ShoppingList />} />
        <Route path="meal-prep" element={<MealPrep />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
