import styles from "./backup.module.scss";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
import ComputerTwoToneIcon from "@mui/icons-material/ComputerTwoTone";
const CreateRole = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.navbar}>NAVBAR</header>
      <div style={{ display: "flex" }}>
        <aside className={styles.sidebar}>SIDEBAR</aside>
        <main className={styles.main}>
          <div className={styles.form}>
            <h2>Create Role</h2>
            <div className={styles.form_container}>
              <form>
                <div className={styles.form_item}>
                  <div className={styles.icon_span}>
                    <NewspaperIcon className={styles.icon} />
                    <span>General Information</span>
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="roleCode">
                      Role Code (Auto Generated):
                    </label>
                    <input type="text" name="" id="roleCode" />
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="roleType">Role Type:</label>
                    <select id="roleType" name="">
                      <option value="">select type</option>
                      <option value="type1">Type1</option>
                      <option value="type2">Type2</option>
                      <option value="type3">Type3</option>
                    </select>
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                      className={styles.date}
                      type="date"
                      name=""
                      id="startDate"
                    />
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                      className={styles.date}
                      type="date"
                      name=""
                      id="endDate"
                    />
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="note">Note:</label>
                    <textarea
                      className={styles.note}
                      name=""
                      id="note"
                      placeholder="Input text"
                    ></textarea>
                  </div>
                </div>
                <div className={styles.form_item}>
                  <div className={styles.icon_span}>
                    <LockOutlinedIcon className={styles.icon} />
                    <span>Rate Parameters</span>
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="rate">Rate:</label>
                    <input type="text" name="" id="rate" />
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="ratePeriod">Rate Period:</label>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "45px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          style={{ flex: "1" }}
                          type="radio"
                          name="ratePeriod"
                          value="hourly"
                          id="hourly"
                          checked={roleDetails.ratePeriod === "hourly"}
                          onChange={handleInput}
                        />
                        <label style={{ flex: "1" }} htmlFor="hourly">
                          Hourly/Dedicated
                        </label>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          style={{ flex: "1" }}
                          type="radio"
                          name="ratePeriod"
                          value="mothly"
                          id="monthly"
                          checked={roleDetails.ratePeriod === "monthly"}
                          onChange={handleInput}
                        />
                        <label style={{ flex: "1" }} htmlFor="monthly">
                          Monthly/Dedicated
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ marginTop: "20px" }}
                    className={styles.label_input}
                  >
                    <label htmlFor="roleType">Role Type:</label>
                    <select id="roleType" name="">
                      <option value="">select type</option>
                      <option value="dedicated/partTime">
                        Dedicated/Part-time
                      </option>
                      <option value="dedicated/fullTime">
                        Dedicated/Full-time
                      </option>
                    </select>
                  </div>
                  <div className={styles.label_input}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <label style={{ flex: "1" }} htmlFor="onsite">
                        Onsite:
                      </label>
                      <input
                        style={{ flex: "1", width: "15px", height: "18px" }}
                        className={styles.date}
                        type="checkbox"
                        name="onsite"
                        value="onsite"
                        id="onsite"
                        checked={roleDetails.onsite}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <label style={{ flex: "1" }} htmlFor="remote">
                        Remote:
                      </label>
                      <input
                        style={{ flex: "1", width: "15px", height: "18px" }}
                        className={styles.date}
                        type="checkbox"
                        name="remote"
                        value="remote"
                        id="remote"
                        checked={roleDetails.remote}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.form_item}>
                  <div className={styles.icon_span}>
                    <ComputerTwoToneIcon className={styles.icon} />
                    <span>Billing Method</span>
                  </div>
                  <div className={styles.label_input}>
                    <label htmlFor="charging">Charging:</label>
                    <select id="charging" name="">
                      <option value="">select charging type</option>
                      <option value="defaultCharging">Default Charging</option>
                      <option value="specialCharging">Special Charging</option>
                      <option value="multiCharging">Multi Charging</option>
                    </select>
                  </div>
                </div>
                <div className={styles.reset_button}>
                  <input
                    style={{
                      width: "45%",
                      marginTop: "10px",
                      border: "none",
                      outline: "none",
                      borderRadius: "4px",
                      height: "30px",
                      color: "#006d7c",
                      fontSize: "12px",
                      padding: "0px 15px",
                      cursor: "pointer",
                      backgroundColor: "#C8F9FF",
                      fontWeight: "600",
                    }}
                    type="reset"
                    value="Reset"
                  />
                  <button>Save</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateRole;
