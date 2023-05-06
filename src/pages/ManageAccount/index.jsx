import React, { useEffect } from "react"; // useEffect
import { IoIosAdd } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { HeaderSettings, PlatFormCard } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import styles from "../ChoosePlatform/.module.scss";
import axios from "axios";
// import axios from "axios";

const ManageAccount = () => {
  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Manage Accounts
    </h5>
  );

  const location = useLocation();

  const clientId = "app-5707550";
  const clientSecret =
    "f0jTU4DJL8jI3Cda9TWVN0QFPNfLL0h9mkK4gdutRJK2ymbIoThft9CzWWy25BTK";

  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );

  const getAccessToken = async () => {
    const res = await axios.post("https://www.printful.com/oauth/token", {
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      code: token,
    });
    console.log(res);
  };

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get("https://api.printful.com/store/products", {
  //         headers: {
  //           Authorization: `Bearer ${access__token}`,
  //         },
  //       });
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (token) {
  //     getProducts();
  //   }
  // }, [token]);

  // const addProductToPrintFul = async () => {
  //   try {
  //     const res = await axios.post(
  //       "https://api.printful.com/store/products",
  //       {
  //         sync_product: {
  //           name: "Framed Landscape Poster",
  //         },
  //         sync_variants: {
  //           variant_id: 10760,
  //           files: [
  //             {
  //               url: "http://example.com/files/posters/poster_1.jpg",
  //             },
  //           ],
  //         },
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${access__token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <div className={styles.platform__section}>
        <div className={styles.platform__header}>
          <h5 className={styles.platform__title}>OpenSea - NFT</h5>
          <a
            href={`https://www.printful.com/oauth/authorize?client_id=app-5936708&redirect_url=https://animade.vercel.app/settings/manage-account`}
            target="_blank"
            className={styles.add__new}
            rel="noreferrer"
          >
            <IoIosAdd className={styles.icon} />
            Link New Account
          </a>
        </div>
        <button onClick={() => getAccessToken()}>Get Access Token</button>
        <div className={styles.platform__list}>
          {new Array(3).fill("").map((_, i) => (
            <PlatFormCard key={i} type="OpenSea" />
          ))}
        </div>
      </div>
      <div className={styles.platform__section}>
        <div className={styles.platform__header}>
          <h5 className={styles.platform__title}>
            Printful Store - Print On Demand
          </h5>
          <Link to="/" className={styles.add__new}>
            <IoIosAdd className={styles.icon} />
            Link New Account
          </Link>
        </div>
        <div className={styles.platform__list}>
          {new Array(3).fill("").map((_, i) => (
            <PlatFormCard key={i} type="Printful" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
