import { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BsSpotify, BsFacebook, BsPinterest, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import "./index.css"
import MainSeparator from './components/MainSeparator';

function App() {

  return (
    <>
      <header className='sticky'>
        <nav className='header-nav'>
          <div className='part-nav'>
            <img 
              src='https://logodownload.org/wp-content/uploads/2017/10/starbucks-logo-0.png' 
              className='nav-item'
              alt='logo' 
              width={70} 
              height={70}
            />
            <a href='#'>MENU</a>
            <a href='#'>REWARDS</a>
            <a href='#'>GIFT CARDS </a>
          </div>
          <div>
            <a href='#' className='find-store ml-2'><IoLocationSharp className='icon-location' />Find a store</a>
            <button 
              className='btn-signin'
              type='button'
              >Sign in
            </button>
            <button 
              className='btn-join ml-2'
              type='button'
            >Join now
            </button>
          </div>
        </nav>
        <div className='after-nav'>
          <h3 className='starbucks-subtitle'>Starbucks Rewards</h3>
        </div>
      </header>
      <main className='main-cont'>
        <div className="hero-image">
          <div className="hero-text">
          <MainSeparator/>
            <h1>FREE COFFEE</h1>
            <h1>IS A TAP AWAY</h1>
            <p>Join now to start earning Rewards.</p>
            <button 
              className='btn-join-main ml-2'
              type='button'
            >Join now
            </button>
            <p>Or <a href='#'>join in the app</a> for the best experience</p>
          </div>
        </div>
        <section className='getting-started-cont'>
          <h2 className='text-center'>Getting started is easy</h2>
          <p className='text-center mt-2'>Earn Stars and get rewarded in a few easy steps.</p>
          <div className='cont-section'>
            <div 
              className='cont-1'>
                <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="1" width={48}
                />
                <h3 className="mt-2">Create an account</h3>
                <p className='mt-2'>
                  To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.
                </p>
            </div>
            <div className='cont-2'>
            <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="1" width={48}
            />
              <h3 className='mt-2'>Order and pay how you’d like</h3>
              <p className='mt-2'>
              Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how
              </p>
            </div>
            <div className='cont-3'>
            <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="1" width={48}
            />
              <h3 className='mt-2'>Earn Stars, get Rewards</h3>
              <p className='mt-2'> 
              As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='cont-favorites'>
            <div className='cont-fav-stars'>
              <h2 className='mt-4'>Get your favorites for free
              </h2>
              <div className='cont-btn-stars'>
                <button className='btn-stars'>
                  <span>25<span className='star'>★</span></span>
                </button>
                <button className='btn-stars'>
                  <span>50<span className='star'>★</span></span>
                </button>
                <button className='btn-stars'>
                  <span>150<span className='star'>★</span></span>
                </button>
                <button className='btn-stars'>
                  <span>200<span className='star'>★</span></span>
                </button>
                <button className='btn-stars'>
                  <span>400<span className='star'>★</span></span>
                </button>
              </div>
            </div>
            <div className='cont-sub-items'>
              <div className='cont-drinks'>
                <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt="coffe25" width={375}/>
              </div>
              <div className='cont-drinks'>
                <h3 className='mb-2'>Customize your drink</h3>
                <p>Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='cont-extra'>
          <h2 className='text-center'>Endless Extras</h2>
          <p className='text-center mt-2'>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy <br></br> ordering, tasty Rewards and—yes, free coffee.</p>
          <div className='cont-section'>
            <div 
              className='cont-1'>
                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="1" width={112}
                />
                <h3 className="mt-2">Fun freebies</h3>
                <p className='mt-2'>
                  Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
                </p>
                <button className='btn-learnmore mt-2'>
                  Learn more
                </button>
            </div>
            <div className='cont-2'>
            <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="1" width={112}
            />
              <h3 className='mt-2'>Order & pay ahead</h3>
              <p className='mt-2'>
                Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
              </p>
              <button className='btn-learnmore mt-2'>
                  Learn more
                </button>
            </div>
            <div className='cont-3'>
            <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="1" width={112}
            />
              <h3 className='mt-2'>Get to free faster</h3>
              <p className='mt-2'> 
                Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
              </p>
              <button className='btn-learnmore mt-2'>
                  Learn more
              </button>
            </div>
          </div>
        </section>
        <section className='cont-info'>
          <h2 className='mb-2'>Cash or card, you earn Stars</h2>
          <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add <br></br> up to (really delicious) Rewards.
          </p>
          <div className='grid'>
            <div>
              <h2>1<span>★</span> per dolar</h2>
              <p className='text-left'>Pay as you go</p>
            </div>
            <div className='cont-scan'>
              <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="scan" width={112} />
              <div className='text-scan'>
              <h3 className='mb-2'>
                Scan and pay separately
              </h3>
              <p>Use cash or credit/debit card at the register.</p>
              </div>
            </div>
            <div className='cont-scan'>
              <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="app" width={112} />
              <div className='text-scan'>
              <h3 className='mb-2'>
              Save payment in the app
              </h3>
              <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
              </div>
            </div>
          </div>
          <hr/>
          <div className='grid'>
            <div>
              <h2>2<span>★</span> per dolar</h2>
              <p>Add funds in the app</p>
            </div>
            <div className='cont-scan'>
              <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="scan" width={112} />
              <div className='text-scan'>
              <h3 className='mb-2'>
              Preload
              </h3>
              <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
              </div>
            </div>
            <div className='cont-scan'>
              <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="app" width={112} />
              <div className='text-scan'>
              <h3 className='mb-2'>
                Register your gift card
              </h3>
              <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='cont-codes'>
          <h2>Star codes</h2>
          <p className='mt-2'>
            Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.
          </p>
          <input 
            type="text"
            className='mt-3'
            placeholder='* Enter your Star Code'
            />
            <button
              type='button'
              className='btn-submit'
            >
              Submit
            </button>

            <h2 className='mt-8 mb-2'>Questions?</h2>
              <p>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a href='#' className='link'>right over here.</a></p>
        </section>
        <section className='cont-terms'>
          <div className='cont-terms-left'>
            <p>At participating stores. Restrictions apply.</p>
            <h2 className='mt-4'>EARNING STARS</h2>  
            <p className='mt-2'>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>  
            <p className='mt-2'>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>    
            <p className='mt-2'>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p> 
            <h3 className='mt-4'>BENEFITS</h3> 
            <p className='mt-2'>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
          </div>
          <div className='cont-terms-right'>
            <h3>TERMS OF USE</h3>
            <p className='mt-2'>For full program details visit 
            starbucks.com/rewards/terms
            opens in new window.</p>
            <p className='mt-2'>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the 
            Starbucks Store Locator
            opens in new window and search for locations honoring “Redeem Rewards”.</p>
            <p className='mt-2'>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
            <h3 className='mt-4'>REDEEMING REWARDS</h3>
            <p className='mt-2'>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all stores honor tiered Rewards. Select stores redeem 150 Stars for free food or drink items only.</p>
          </div>
        </section>
      </main>
      <footer>
        <nav className='nav-footer'>
          <div className='nav-flex'>
              <div className='nav-cont1'>
                <h3>About Us</h3>
                <p className='mt-4'>Our company</p>
                <p className='mt-2'>Our coffee</p>
                <p className='mt-2'>Stories and News</p>
                <p className='mt-2'>Starbucks Archive</p>
                <p className='mt-2'>Investor Relations</p>
                <p className='mt-2'>Costumer Service</p>
              </div>
              <div className='nav-cont2'>
                <h3>Carrers</h3>
                <p className='mt-4'>Culture and Values</p>
                <p className='mt-2'>Inclusion, Diversity, and Equity</p>
                <p className='mt-2'>College Achievement Plan</p>
                <p className='mt-2'>Alumni Community</p>
                <p className='mt-2'>U.S Carrers</p>
                <p className='mt-2'>International Careers</p>
              </div>
              <div className='nav-cont3'>
                <h3>Social Impact</h3>
                <p className='mt-4'>People</p>
                <p className='mt-2'>Planet</p>
                <p className='mt-2'>Environmental and Social Impact Reporting</p>
              </div>
              <div className='nav-cont4'>
                <h3>For Business Partners</h3>
                <p className='mt-4'>Landlord Support Center</p>
                <p className='mt-2'>Suppliers</p>
                <p className='mt-2'>Corporate Gift Card Sales</p>
                <p className='mt-2'>Office and Foodservice Coffee</p>
              </div>   
              <div className='nav-cont5'>
                <h3>Order and Pickup</h3>
                <p className='mt-4'>Order on the App</p>
                <p className='mt-2'>Order on the Web</p>
                <p className='mt-2'>Delivery</p>
                <p className='mt-2'>Order and Pickup Options</p>
                <p className='mt-2'>Explore and Find Coffee for Home</p>
              </div>
          </div>
          <hr/>
          <div className='nav-icon'>
            <BsSpotify className='icon-footer'/>
            <BsFacebook className='icon-footer'/>
            <BsPinterest className='icon-footer'/>
            <FaInstagramSquare className='icon-footer'/>
            <BsYoutube className='icon-footer'/>
            <BsTwitter className='icon-footer'/>
          </div>
          <div className='secondary-links'>
            <h3>Privacy Policy </h3>
            <span className='ml-2 mr-2'> | </span>
            <h3>Terms of Use </h3>
            <span className='ml-2 mr-2'> | </span>
            <h3>CA Supply Chain Act </h3>
            <span className='ml-2 mr-2'> | </span>
            <h3>Cookie Preferences</h3>
          </div>
          <div className='secondary-links'>
            <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default App
