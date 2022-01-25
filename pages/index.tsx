import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Truck, Package, Moon } from "phosphor-react";

interface props {
  couriers: Array<any>;
}

function Home({ couriers }: props) {
  return (
    <>
      <div className="navbar justify-center shadow-lg bg-neutral text-neutral-content">
        <div className="w-[768px] px-4">
          <div className="flex-1 flex">
            <Truck size={28} weight="fill" className="mr-2" />
            <span className="text-lg font-bold">Resiku</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <Moon size={28} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center  gap-0 flex-wrap w-[768px] bg-gray-500 min-h-screen">
          <h1 className="font-bold text-2xl text-center mt-4">Cek Resimu</h1>
          <Package size={300} weight="duotone" className="mt-4" />
          <div className="ekspedisi flex flex-wrap justify-self-center gap-2 mt-4 px-4 justify-center">
            {couriers.map((courier) => (
              <button className="btn" key={courier.code}>
                {courier.description}
              </button>
            ))}
          </div>
          <div className="form-control w-3/4 mt-4">
            <div className="relative">
              <input placeholder="Cari..." className="w-full pr-16 input input-bordered" type="text" />
              <button className="absolute top-0 right-0 rounded-l-none btn btn-info">Cek Resi</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://api.binderbyte.com/v1/list_courier?api_key=65e6e9dc1f8678e0c44272f055cee0a08056db9e7c9c765c60f7b7e1f696ed97");
  const couriers = await response.json();

  return {
    props: {
      couriers,
    },
  };
}

export default Home;
