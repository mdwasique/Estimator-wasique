import { useState } from "react";
import styles from "./genralInformation.module.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const GenralInformation = () => {
  const [userRegister, setUserRegister] = useState({
    customerName: "",
    industry: "",
    sizeOfCustomer: "",
    revenue: "",
    numberOfUsers: "",
    legalEntities: "",
    numberOfManufacturingPlants: "",
    numberOfSalesLocations: "",
    country: "",
    c4c: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegister({ ...userRegister, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userRegister.customerName);
    console.log(userRegister.industry);
    console.log(userRegister.sizeOfCustomer);
    console.log(userRegister.revenue);
    console.log(userRegister.numberOfUsers);
    console.log(userRegister.legalEntities);
    console.log(userRegister.numberOfManufacturingPlants);
    console.log(userRegister.numberOfSalesLocations);
    console.log(userRegister.country);
    console.log(userRegister.c4c);
  };

  return (
    <div className={styles.layout}>
      <header className={styles.navbar}>NAVBAR</header>
      <div style={{ display: "flex" }}>
        <aside className={styles.sidebar}>SIDEBAR</aside>
        <main className={styles.main}>
          <div className={styles.container}>
            <h2>Customer Details</h2>
            <div className={styles.icon_span}>
              <ErrorOutlineIcon className={styles.icon} />
              <span>General Information</span>
            </div>
            <form className={styles.form} onSubmit={submitHandler}>
              <div className={styles.form_items}>
                <div>
                  <label htmlFor="customer-name">Customer Name:</label>
                  <input
                    autoComplete="off"
                    name="customerName"
                    type="text"
                    id="customer-name"
                    // placeholder="Customer name"  it already has style feel free to umcomment it ..
                    value={userRegister.customerName}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="industry">Industry:</label>
                  <input
                    autoComplete="off"
                    name="industry"
                    type="text"
                    id="industry"
                    value={userRegister.industry}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className={styles.form_items}>
                <div>
                  <label htmlFor="size-of-customer">Size of Customer:</label>
                  <input
                    name="sizeOfCustomer"
                    type="text"
                    id="size-of-customer"
                    value={userRegister.sizeOfCustomer}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="revenue">Revenue:</label>
                  <input
                    name="revenue"
                    type="text"
                    id="revenue"
                    value={userRegister.revenue}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className={styles.form_items}>
                <div>
                  <label htmlFor="no-of-users">Number of Users:</label>
                  <input
                    name="numberOfUsers"
                    type="text"
                    id="no-of-users"
                    value={userRegister.numberOfUsers}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="legal-entities">Legal Entities:</label>
                  <input
                    name="legalEntities"
                    type="text"
                    id="legal-entities"
                    value={userRegister.legalEntities}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className={styles.form_items}>
                <div>
                  <label htmlFor="no-of-manufacturing-plants">
                    Number of Manufacturing Plants:
                  </label>
                  <input
                    name="numberOfManufacturingPlants"
                    type="text"
                    id="no-of-manufacturing-plants"
                    value={userRegister.numberOfManufacturingPlants}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="no-of-sales-locations">
                    Number of Sales Locations:
                  </label>
                  <input
                    name="numberOfSalesLocations"
                    type="text"
                    id="no-of-sales-locations"
                    value={userRegister.numberOfSalesLocations}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className={styles.form_items}>
                <div>
                  <label htmlFor="country">Country:</label>
                  <select
                    id="country"
                    name="country"
                    value={userRegister.country}
                    onChange={handleInput}
                  >
                    <option value="">select country</option>
                    <option value="india">India</option>
                    <option value="russia">Russia</option>
                    <option value="australia">Australia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c4c">C4C:</label>
                  <input
                    name="c4c"
                    type="text"
                    id="c4c"
                    value={userRegister.c4c}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <button type="submit">Save Details</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GenralInformation;
