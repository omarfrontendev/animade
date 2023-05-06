import React, { useState } from "react"; // useEffect
import { IoIosAdd } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { HeaderSettings, PlatFormCard } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import axios from "axios";
import styles from "../ChoosePlatform/.module.scss";

const ManageAccount = () => {
  const [data, setData] = useState({});
  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Manage Accounts
    </h5>
  );

  const location = useLocation();

  const clientId = process.env.REACT_APP_PRINTFUL__CLIENT__ID;
  const clientSecret = process.env.REACT_APP_PRINTFUL__SECRET__ID;

  // ==== get token ======
  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );

  console.log(token);
  console.log(clientId);
  console.log(clientSecret);

  // ==== get access token ====== done
  const getAccessToken = async () => {
    try {
      const { data } = await axios.post(
        `https://www.printful.com/oauth/token`,
        {
          grant_type: "authorization_code",
          client_id: clientId,
          client_secret: clientSecret,
          code: token,
        }
      );
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ==== get products ====== done
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_PRINTFUL__API__URL}/store/products`,
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // ==== add product ====== //#//
  const addProductToPrintFul = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_PRINTFUL__API__URL}/store/products`,
        {
          sync_product: {
            name: "T-Shirt",
            thumbnail: "https://picsum.photos/200/300",
          },
          sync_variants: [
            {
              retail_price: 21.0,
              variant_id: 4011,
              files: [
                {
                  url: "https://picsum.photos/200/300?image=1",
                },
                {
                  type: "back",
                  url: "https://picsum.photos/200/300?image=1",
                },
              ],
            },
            {
              retail_price: 21.0,
              variant_id: 4012,
              files: [
                {
                  url: "https://picsum.photos/200/300?image=1",
                },
                {
                  type: "back",
                  url: "https://picsum.photos/200/300?image=1",
                },
              ],
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <div className={styles.platform__section}>
        <div className={styles.platform__header}>
          <h5 className={styles.platform__title}>OpenSea - NFT</h5>
          <a
            href={`https://www.printful.com/oauth/authorize?client_id=${clientId}&redirect_url=https://animade.vercel.app/settings/manage-account`}
            target="_blank"
            className={styles.add__new}
            rel="noreferrer"
          >
            <IoIosAdd className={styles.icon} />
            Link New Account
          </a>
        </div>
        <button onClick={() => getAccessToken()}>Get Access Token</button>
        <br />
        <button onClick={() => getProducts()}>Get Products</button>
        <br />
        <button onClick={() => addProductToPrintFul()}>Add Product</button>
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
