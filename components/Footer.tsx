import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="site-footer-wrapper centered">
      <div className="footer-divider"></div>
      <div className="site-footer">
        <p className="footer-top">
          Questions? Call{" "}
          <a className="footer-top-a" href="tel:0 801-000-723">
            0 801-000-723
          </a>
        </p>
        <ul className="footer-links structural">
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              placeholder="footer_responsive_link_faq"
            >
              <span id="" data-uia="data-uia-footer-label">
                FAQ
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_help_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              placeholder="footer_responsive_link_help"
            >
              <span id="" data-uia="data-uia-footer-label">
                Help Center
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_terms_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              placeholder="footer_responsive_link_terms"
            >
              <span id="" data-uia="data-uia-footer-label">
                Terms of Use
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_privacy_separate_link_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              placeholder="footer_responsive_link_privacy_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Privacy
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_cookies_separate_link_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              href="#"
              placeholder="footer_responsive_link_cookies_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Cookie Preferences
              </span>
            </a>
          </li>
          <li
            className="footer-link-item"
            placeholder="footer_responsive_link_corporate_information_item"
          >
            <a
              className="footer-link"
              data-uia="footer-link"
              
              placeholder="footer_responsive_link_corporate_information"
            >
              <span id="" data-uia="data-uia-footer-label">
                Corporate Information
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
