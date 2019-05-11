/*
 * LandingPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/logo.svg';
import finance from '../../images/fiance.svg';
import branding from '../../images/branding.svg';
import access from '../../images/access.svg';
import documents from '../../images/documents.svg';
import bookmarks from '../../images/bookmarks.svg';
import grayLogo from '../../images/gray-logo.svg';
import biz from '../../images/biz.svg';
import brand from '../../images/brand.svg';
import brandTop from '../../images/brand-top.svg';
import price from '../../images/price.svg';

import './style.scss';

const Wrapper = styled.div`
  padding 30px 32px 0;
  overflow: hidden;
`;

const Menu = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const BrandTitle = styled.div`
  font-family: Catamaran;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 29px;
  color: #1b367c;
  margin-left: 21px;
`;

const MenuContent = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 29px;
  text-align: center;
  color: #1b367c;
  text-decoration: none;

  & + & {
    margin-left: 44px;
  }
`;

const MenuButtons = styled.div`
  display: flex;
  align-items: center;
`;

const SecondaryButton = styled(Link)`
  background: rgba(106, 137, 222, 0.1);
  border-radius: 12px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 29px;
  text-align: center;
  color: #1b367c;
  text-decoration: none;
  padding: 5px 20px;

  &:hover {
    background: #1b367c;
    color: rgba(106, 137, 222);
  }
`;

const GetStartedButton = styled(Link)`
  width: 135px;
  height: 40px;
  background: #ec6689;
  border-radius: 12px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 29px;
  text-align: center;
  color: #fff;
  margin-left: 16px;
  text-decoration: none;
  padding-top: 7px;

  &:hover {
    background: #fff;
    color: #ec6689;
    border: 1px solid #ec6689;
  }
`;

const StartButton = styled(Link)`
  width: 216px;
  min-width: 216px;
  height: 56px;
  background: #ec6689;
  border-radius: 12px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 23px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  padding-top: 17px;
  text-align: center;

  &:hover {
    color: #ec6689;
    background: #fff;
    border: 1px solid #ec6689;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class LandingPage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Menu>
          <Brand to="/">
            <img src={logo} alt="Logo" />
            <BrandTitle>LaunchBox</BrandTitle>
          </Brand>
          <MenuContent>
            <MenuItem to="/">Features</MenuItem>
            <MenuItem to="/">Pricing</MenuItem>
            <MenuItem to="/">Contact us</MenuItem>
          </MenuContent>
          <MenuButtons>
            <SecondaryButton to="/login">Login</SecondaryButton>
            <GetStartedButton to="/home">Get Started</GetStartedButton>
          </MenuButtons>
        </Menu>
        <section className="section1">
          <div className="left-wrapper">
            <div className="content">
              <div className="left-wrapper__title">
                <span>All-in-one</span> app bundle to run your
                <span> business</span>
              </div>
              <div className="left-wrapper__subtitle">
                Keep life simple and solve multiple tasks in one place
              </div>
              <div className="left-wrapper__action">
                <div className="left-wrapper__action-input">
                  <input type="text" placeholder="name@company.com" />
                </div>
                <StartButton to="/">Start FOR FREE</StartButton>
              </div>
            </div>
          </div>
          <div className="right-wrapper">
            <div className="right-wrapper__container1" />
            <div className="right-wrapper__container2" />
            <div className="right-wrapper__container3" />
            <div className="right-wrapper__container4">
              <div className="content">
                <div className="right-wrapper__container4-marker right-wrapper__container4-marker1">
                  <div className="right-wrapper__container4-marker__image">
                    <img src={finance} alt="Finance" />
                  </div>
                  <div className="right-wrapper__container4-marker__title">
                    Finance
                  </div>
                </div>
                <div className="right-wrapper__container4-marker right-wrapper__container4-marker2">
                  <div className="right-wrapper__container4-marker__image">
                    <img src={branding} alt="Branding" />
                  </div>
                  <div className="right-wrapper__container4-marker__title">
                    Branding
                  </div>
                </div>
                <div className="right-wrapper__container4-marker right-wrapper__container4-marker3">
                  <div className="right-wrapper__container4-marker__image">
                    <img src={access} alt="Access" />
                  </div>
                  <div className="right-wrapper__container4-marker__title">
                    Access
                  </div>
                </div>
                <div className="right-wrapper__container4-marker right-wrapper__container4-marker4">
                  <div className="right-wrapper__container4-marker__image">
                    <img src={documents} alt="Documents" />
                  </div>
                  <div className="right-wrapper__container4-marker__title">
                    Documents
                  </div>
                </div>
                <div className="right-wrapper__container4-marker right-wrapper__container4-marker5">
                  <div className="right-wrapper__container4-marker__image">
                    <img src={bookmarks} alt="Bookmarks" />
                  </div>
                  <div className="right-wrapper__container4-marker__title">
                    Bookmarks
                  </div>
                </div>
              </div>
            </div>
            <div className="right-wrapper__container5">
              <div className="content">
                <div className="right-wrapper__container5-rect right-wrapper__container5-rect1" />
                <div className="right-wrapper__container5-rect right-wrapper__container5-rect2" />
                <div className="right-wrapper__container5-rect right-wrapper__container5-rect3" />
                <div className="right-wrapper__container5-rect right-wrapper__container5-rect4" />
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="section2-img">
            <img src={grayLogo} alt="Gray Logo" />
          </div>
          <div className="section2-title">there’s a box for every task...</div>
        </section>
        <section className="section3">
          <div className="left-wrapper">
            <img src={biz} alt="Biz Box" />
          </div>
          <div className="right-wrapper">
            <img src={finance} alt="Finance" />
            <div className="right-wrapper__title">BizBox</div>
            <div className="right-wrapper__description">
              The ultra-minmal income and expenses planner.
              <br />
              Real-time tracking and future projections in one view.
              <br />
              Get reminded to pay and be paid on time!
            </div>
            <div className="d-flex">
              <StartButton to="/biz">Get Started</StartButton>
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="left-wrapper">
            <img src={branding} alt="Branding" />
            <div className="left-wrapper__title">BrandBox</div>
            <div className="left-wrapper__description">
              The best way to store and manage brand info and assets.
              <br />
              Logos, colours, fonts and icons are now all in one place.
              <br />
              Ready for direct download or sharing with collaborators.
            </div>
            <div className="d-flex">
              <StartButton to="/brand">Get Started</StartButton>
            </div>
          </div>
          <div className="right-wrapper">
            <img src={brand} alt="Brand Box" />
            <div className="right-wrapper__top">
              <img src={brandTop} alt="Brand Top" />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="section5__title">Coming Soon</div>
          <div className="section5__description">
            If you are reading this, that means you are one of the LaunchBox
            earlybirds!
            <br />
            We are excited to have you on board and can’t wait to introduce you
            to some of the new features we are developing! We have many new
            boxes on the way, so hang tight.
          </div>
          <div className="section5__content">
            <div className="section5__content__item">
              <div className="section5__content__item__image">
                <img src={access} alt="ToolBox" />
              </div>
              <div className="section5__content__item__content">
                <div className="section5__content__item__content__title">
                  ToolBox
                </div>
                <div className="section5__content__item__content__description">
                  A catalog of all your apps and services
                </div>
              </div>
            </div>
            <div className="section5__content__item">
              <div className="section5__content__item__image">
                <img src={documents} alt="PaperBox" />
              </div>
              <div className="section5__content__item__content">
                <div className="section5__content__item__content__title">
                  PaperBox
                </div>
                <div className="section5__content__item__content__description">
                  Store and edit docs. Find new templates
                </div>
              </div>
            </div>
            <div className="section5__content__item new">
              <div className="section5__content__item__content">
                <div className="section5__content__item__content__title">
                  Got ideas?
                </div>
                <div className="section5__content__item__content__description">
                  <StartButton to="/">REQUEST A BOX</StartButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section6">
          <div className="section6__title">Pricing</div>
          <div className="section6__description">
            Earlybird specials: One price for life!
          </div>
          <div className="section6__content">
            <div className="section6__content__item">
              <div className="section6__content__item__content">
                <div className="section6__content__item__content__title">
                  Monthly
                </div>
                <div className="section6__content__item__content__value">
                  <div className="section6__content__item__content__value-item">
                    <div className="section6__content__item__content__value-item__title">
                      12$
                    </div>
                    <div className="section6__content__item__content__value-item__subtitle">
                      per month
                    </div>
                  </div>
                </div>
                <div className="section6__content__item__content__button">
                  <SecondaryButton to="/">Choose Plan</SecondaryButton>
                </div>
              </div>
            </div>
            <div className="section6__content__item">
              <div className="section6__content__item__content">
                <div className="section6__content__item__content__title">
                  Yearly
                </div>
                <div className="section6__content__item__content__value">
                  <div className="section6__content__item__content__value-item">
                    <div className="section6__content__item__content__value-item__title">
                      9$
                    </div>
                    <div className="section6__content__item__content__value-item__subtitle">
                      per month
                    </div>
                  </div>
                  <div className="section6__content__item__content__value-item">
                    <div className="section6__content__item__content__value-item__title">
                      =
                    </div>
                  </div>
                  <div className="section6__content__item__content__value-item">
                    <div className="section6__content__item__content__value-item__year">
                      108$
                    </div>
                    <div className="section6__content__item__content__value-item__subtitle">
                      year
                    </div>
                  </div>
                </div>
                <div className="section6__content__item__content__button">
                  <SecondaryButton to="/">Choose Plan</SecondaryButton>
                </div>
              </div>
              <div className="section6__content__item-mark">
                <div className="content">
                  <img src={price} alt="Price" />
                  <div className="section6__content__item-mark__title">
                    SAVE
                  </div>
                  <div className="section6__content__item-mark__subtitle">
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section7">
          <div className="section7__title">Commitment issues?</div>
          <div className="section7__description">
            <StartButton to="/">Start 7-day FREE Trial</StartButton>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-element footer-icon">
            <img src={logo} alt="Logo" />
            <div className="footer-icon__title">LaunchBox</div>
            <div className="footer-icon__subtitle">© 2019</div>
          </div>
          <div className="footer-element footer-legal">
            <div className="footer-legal__title">Legal</div>
            <div className="footer-legal__subtitle">Terms and Conditions</div>
            <div className="footer-legal__subtitle">Privacy Policy</div>
          </div>
          <div className="footer-element footer-touch">
            <div className="footer-touch__title">Get in Touch</div>
            <div className="footer-touch__subtitle">hello@launchbox.is</div>
            <div className="footer-touch__subtitle">(+354) 787 0000</div>
          </div>
          <div className="footer-element footer-social">
            <div className="footer-social__title">Social</div>
            <div className="footer-social__subtitle">
              <div className="footer-social__subtitle-element">
                <i className="fab fa-facebook-f" />
              </div>
              <div className="footer-social__subtitle-element">
                <i className="fab fa-twitter" />
              </div>
              <div className="footer-social__subtitle-element">
                <i className="fab fa-instagram" />
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    );
  }
}

export default LandingPage;
