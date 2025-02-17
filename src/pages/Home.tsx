import { useEffect, useState } from "react";
import api from "../services/api";
import Header from "../components/header";

interface Item {
  id: number;
  title: string;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // probably should be moved into a service
    // for time sake, I'll leave it here
    api
      .get("/posts?_limit=2000")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-[42px] min-h-screen w-screen bg-gray-100">
      <Header />
      <div className="flex justify-center items-center w-full h-[calc(100vh-66px)]">
        {items.length === 0 ? (
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        ) : (
          <div className="pt-[42px] overflow-y-auto w-full px-4">
            <ul className="space-y-2 max-w-2xl mx-auto max-h-[calc(100vh-82px)]  w-screen">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="p-4 bg-white text-black rounded-[10px] shadow-md border"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
