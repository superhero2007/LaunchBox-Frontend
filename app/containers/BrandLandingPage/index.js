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

import brandlogo from '../../images/brand_logo.svg';
import brandfirst from '../../images/brand_first.svg';
import brandsecond from '../../images/brand_second.svg';
import brandthird from '../../images/brand_third.svg';
import brandforth from '../../images/brand_forth.svg';
import price from '../../images/price.svg';
import brandguidelogo from '../../images/brandguide_logo.svg';

import './style.scss';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Main = styled.div`
  max-width: 1300px;
  padding: 0 40px;
  margin: 0 auto;
`;

const Menu = styled.div`
  padding 30px 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Beta = styled.div`
  width: 39px;
  height: 16px;
  background: rgba(41, 85, 242, 0.1);
  border-radius: 11px;
  color: #1b367c;
  margin-left: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButtons = styled.div`
  display: flex;
  align-items: center;
`;

const SecondaryButton = styled.a`
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

const GetStartedButton = styled.a`
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

const StartButton = styled.a`
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
class BrandLandingPage extends React.PureComponent {
  render() {
    return (
      <Wrapper className="wrapper">
        <Main className="main">
          <Menu className="menu">
            <Brand to="/" className="menu-brand">
              <img src={brandlogo} alt="Logo" className="menu-brand__logo" />
              <Beta>alpha</Beta>
            </Brand>
            <MenuButtons className="menu-button">
              <SecondaryButton href="/login">Login</SecondaryButton>
              <GetStartedButton href="https://viraluno.typeform.com/to/Fcx7nI">
                Get Started
              </GetStartedButton>
            </MenuButtons>
          </Menu>
          <section className="section1">
            <div className="left-wrapper">
              <div className="left-wrapper__brand">
                <div className="left-wrapper__brand__title">
                  The Minimal Brand
                  <br />
                  Management Tool
                </div>
              </div>
              <div className="left-wrapper__image">
                <img src={brandfirst} alt="Brand Box" />
              </div>
              <div className="left-wrapper__description">
                <span>
                  Sharing assets and guidelines through email was getting
                  old,&nbsp;
                </span>
                <span>
                  so we created Brandguide. An interactive shareable
                  guideline&nbsp;
                </span>
                <span>
                  that keeps all brand assets organized in one place.&nbsp;
                </span>
              </div>
              <div className="left-wrapper__button d-flex">
                <StartButton href="https://viraluno.typeform.com/to/Fcx7nI">
                  Start For Free
                </StartButton>
              </div>
            </div>
            <div className="right-wrapper">
              <img src={brandfirst} alt="Brand Box" />
            </div>
          </section>
          <section className="section2">
            <div className="left-wrapper">
              <img src={brandthird} alt="Biz Box" />
            </div>
            <div className="right-wrapper">
              <div className="right-wrapper__brand">
                <div className="right-wrapper__brand__title">
                  Better Branding with a <br />
                  Single Source of Truth
                </div>
              </div>
              <div className="right-wrapper__image">
                <img src={brandthird} alt="Brand Box" />
              </div>
              <div className="right-wrapper__description">
                <span>
                  Make sure your company is represented by the latest and
                  greatest brand assets. No more old files in circulation. When
                  admins make changes in Brandguide, they take effect everywhere
                  else.
                </span>
              </div>
            </div>
          </section>
          <section className="section3">
            <div className="left-wrapper">
              <div className="left-wrapper__brand">
                <div className="left-wrapper__brand__title">
                  Storage and Guidelines
                  <br />
                  in One Interactive View
                </div>
              </div>
              <div className="left-wrapper__image">
                <img src={brandsecond} alt="Brand Box" />
              </div>
              <div className="left-wrapper__description">
                <span>
                  Brandguide helps you avoid the clutter of traditional digital
                  asset management by combining your guidelines and file storage
                  into one interactive view. Brand consistency is now easier
                  than ever.
                </span>
              </div>
            </div>
            <div className="right-wrapper">
              <img src={brandsecond} alt="Brand Box" />
            </div>
          </section>
          <section className="section4">
            <div className="left-wrapper">
              <img src={brandforth} alt="Biz Box" />
            </div>
            <div className="right-wrapper">
              <div className="right-wrapper__brand">
                <div className="right-wrapper__brand__top">coming soon</div>
                <div className="right-wrapper__brand__title">
                  AI Suggestions Help
                  <br />
                  Your Brand Stay Ahead
                </div>
              </div>
              <div className="right-wrapper__image">
                <img src={brandforth} alt="Brand Box" />
              </div>
              <div className="right-wrapper__description">
                <span>
                  Let Brandguide’s AI suggestions guide you through the ever
                  changing digital landscape. Analyzing data from your online
                  channels, suggesting edits, improvements and new action.
                </span>
              </div>
            </div>
          </section>

          <section className="section6">
            <div className="section6__title">Pricing</div>
            <div className="section6__description">
              One-price-only while we are still in beta!
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
                    <SecondaryButton href="https://viraluno.typeform.com/to/Fcx7nI">
                      Choose Plan
                    </SecondaryButton>
                  </div>
                  <div className="section6__content__item__content__description">
                    <div className="section6__content__item__content__description-item">
                      <span className="section6__content__item__content__description-item__price">
                        $9&nbsp;
                      </span>
                      <span className="section6__content__item__content__description-item__text">
                        per&nbsp;
                        <strong>Additional Brand</strong>
                      </span>
                    </div>

                    <div className="section6__content__item__content__description-item">
                      <span className="section6__content__item__content__description-item__price">
                        $6&nbsp;
                      </span>
                      <span className="section6__content__item__content__description-item__text">
                        per&nbsp;
                        <strong>Additional User</strong>
                      </span>
                    </div>
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
                    <SecondaryButton href="https://viraluno.typeform.com/to/Fcx7nI">
                      Choose Plan
                    </SecondaryButton>
                  </div>
                  <div className="section6__content__item__content__description">
                    <div className="section6__content__item__content__description-item">
                      <span className="section6__content__item__content__description-item__price">
                        $7&nbsp;
                      </span>
                      <span className="section6__content__item__content__description-item__text">
                        per&nbsp;
                        <strong>Additional Brand</strong>
                      </span>
                    </div>

                    <div className="section6__content__item__content__description-item">
                      <span className="section6__content__item__content__description-item__price">
                        $4&nbsp;
                      </span>
                      <span className="section6__content__item__content__description-item__text">
                        per&nbsp;
                        <strong>Additional User</strong>
                      </span>
                    </div>
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
              <StartButton href="https://viraluno.typeform.com/to/Fcx7nI">
                Start 7-day FREE Trial
              </StartButton>
            </div>
          </section>
          <footer className="footer">
            <div className="footer__top">
              <div className="footer-icon">
                <img src={brandguidelogo} alt="Logo" />
                <a
                  href="mailto:hello@brandguide.app"
                  className="footer-icon__title"
                >
                  hello@brandguide.app
                </a>
                <div className="footer-icon__subtitle">
                  60 St Martins Lane, Covent Garden
                  <br />
                  London, United Kingdom
                </div>
              </div>
              <div className="footer-social">
                <div className="footer-social__subtitle">
                  <Link to="/" className="footer-social__subtitle-element">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="/" className="footer-social__subtitle-element">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer__menu">
              <Link to="/" className="footer__menu-element">
                Terms and Conditions
              </Link>
              <Link to="/" className="footer__menu-element">
                Privacy Policy
              </Link>
              <Link to="/" className="footer__menu-element">
                Cookie Policy
              </Link>
            </div>
            <div className="footer-mobile-icon">© 2019 - Viral Uno ehf.</div>
          </footer>
        </Main>
      </Wrapper>
    );
  }
}

export default BrandLandingPage;
