import React, { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";

interface PhoneCountrySelectorProps {
  selected: {
    name: string;
    countryCode: string;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string;
      countryCode: string;
    }>
  >;
}

export const PhoneCountrySelector: React.FC<PhoneCountrySelectorProps> = ({
  selected,
  setSelected,
}) => {
  const [openSelect, setOpenSelect] = useState(false);

  const onSelected = (e: any) => {
    const name = `${e.currentTarget.getAttribute(`id`)}`;
    const countryCode = `+${e.currentTarget.innerText.split(`+`)[1]}`;

    const current = document.querySelector(
      `li[class="flag-select-option ui-select-item ui-select-item-selected ui-select-item-highlighted"]`
    );
    const next = document.querySelector(`li[data-uia="option-${name}"]`);

    if (next)
      next.setAttribute(
        `class`,
        `flag-select-option ui-select-item ui-select-item-selected ui-select-item-highlighted`
      );
    if (current)
      current.setAttribute(`class`, `flag-select-option ui-select-item`);

    setOpenSelect(false);

    setSelected({
      name,
      countryCode,
    });
  };

  const { country } = useLocation();
  useEffect(() => {
    const el = document.querySelector(`li[data-uia="option-${country}"]`);

    if (el && el.textContent) {
      const countryCode = `+${el.textContent.split(`+`)[1]}`;
      el.setAttribute(
        `class`,
        `flag-select-option ui-select-item ui-select-item-selected ui-select-item-highlighted`
      );

      setSelected({
        name: country,
        countryCode,
      });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <div
      data-uia="phone-country-selector+container"
      className={`ui-select-wrapper ${
        openSelect ? `ui-select-wrapper-open` : ``
      } country-select`}
    >
      <a
        data-uia="phone-country-selector+target"
        href="#"
        className="ui-select-wrapper-link"
        onClick={() => setOpenSelect(!openSelect)}
      >
        <div
          className="ui-select-current"
          placeholder='{"current_selected_country":"SB"}'
        >
          <span
            className={`country-select-flag nf-flag nf-flag-${selected.name.toLowerCase()}`}
          ></span>
          <span className="country-select-code">{selected.countryCode}</span>
        </div>
      </a>
      <ul
        data-uia="phone-country-selector+option-list"
        className={`ui-select-options ${
          openSelect ? `` : `ui-select-options-hidden`
        } flag-select-item-list`}
      >
        <li
          data-uia="option-AF"
          className="flag-select-option ui-select-item ui-select-item-highlighted"
          placeholder='{"id":"AF","selected":false,"highlighted":true}'
        >
          <a
            id="AF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-af"></span>
            <span id="" className="country-name" data-uia="">
              Afghanistan <em className="country-code"> +93</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AX"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AX","selected":false,"highlighted":false}'
        >
          <a
            id="AX"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ax"></span>
            <span id="" className="country-name" data-uia="">
              Åland Islands <em className="country-code"> +358</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AL","selected":false,"highlighted":false}'
        >
          <a
            id="AL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-al"></span>
            <span id="" className="country-name" data-uia="">
              Albania <em className="country-code"> +355</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-DZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"DZ","selected":false,"highlighted":false}'
        >
          <a
            id="DZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-dz"></span>
            <span id="" className="country-name" data-uia="">
              Algeria <em className="country-code"> +213</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AS","selected":false,"highlighted":false}'
        >
          <a
            id="AS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-as"></span>
            <span id="" className="country-name" data-uia="">
              American Samoa <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AD"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AD","selected":false,"highlighted":false}'
        >
          <a
            id="AD"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ad"></span>
            <span id="" className="country-name" data-uia="">
              Andorra <em className="country-code"> +376</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AO","selected":false,"highlighted":false}'
        >
          <a
            id="AO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ao"></span>
            <span id="" className="country-name" data-uia="">
              Angola <em className="country-code"> +244</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AI","selected":false,"highlighted":false}'
        >
          <a
            id="AI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ai"></span>
            <span id="" className="country-name" data-uia="">
              Anguilla <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AQ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AQ","selected":false,"highlighted":false}'
        >
          <a
            id="AQ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-aq"></span>
            <span id="" className="country-name" data-uia="">
              Antarctica <em className="country-code"> +672</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AG","selected":false,"highlighted":false}'
        >
          <a
            id="AG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ag"></span>
            <span id="" className="country-name" data-uia="">
              Antigua &amp; Barbuda <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AR","selected":false,"highlighted":false}'
        >
          <a
            id="AR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ar"></span>
            <span id="" className="country-name" data-uia="">
              Argentina <em className="country-code"> +54</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AM","selected":false,"highlighted":false}'
        >
          <a
            id="AM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-am"></span>
            <span id="" className="country-name" data-uia="">
              Armenia <em className="country-code"> +374</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AW","selected":false,"highlighted":false}'
        >
          <a
            id="AW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-aw"></span>
            <span id="" className="country-name" data-uia="">
              Aruba <em className="country-code"> +297</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AU","selected":false,"highlighted":false}'
        >
          <a
            id="AU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-au"></span>
            <span id="" className="country-name" data-uia="">
              Australia <em className="country-code"> +61</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AT","selected":false,"highlighted":false}'
        >
          <a
            id="AT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-at"></span>
            <span id="" className="country-name" data-uia="">
              Austria <em className="country-code"> +43</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AZ","selected":false,"highlighted":false}'
        >
          <a
            id="AZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-az"></span>
            <span id="" className="country-name" data-uia="">
              Azerbaijan <em className="country-code"> +994</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BS","selected":false,"highlighted":false}'
        >
          <a
            id="BS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bs"></span>
            <span id="" className="country-name" data-uia="">
              Bahamas <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BH","selected":false,"highlighted":false}'
        >
          <a
            id="BH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bh"></span>
            <span id="" className="country-name" data-uia="">
              Bahrain <em className="country-code"> +973</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BD"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BD","selected":false,"highlighted":false}'
        >
          <a
            id="BD"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bd"></span>
            <span id="" className="country-name" data-uia="">
              Bangladesh <em className="country-code"> +880</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BB"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BB","selected":false,"highlighted":false}'
        >
          <a
            id="BB"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bb"></span>
            <span id="" className="country-name" data-uia="">
              Barbados <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BY","selected":false,"highlighted":false}'
        >
          <a
            id="BY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-by"></span>
            <span id="" className="country-name" data-uia="">
              Belarus <em className="country-code"> +375</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BE","selected":false,"highlighted":false}'
        >
          <a
            id="BE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-be"></span>
            <span id="" className="country-name" data-uia="">
              Belgium <em className="country-code"> +32</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BZ","selected":false,"highlighted":false}'
        >
          <a
            id="BZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bz"></span>
            <span id="" className="country-name" data-uia="">
              Belize <em className="country-code"> +501</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BJ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BJ","selected":false,"highlighted":false}'
        >
          <a
            id="BJ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bj"></span>
            <span id="" className="country-name" data-uia="">
              Benin <em className="country-code"> +229</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BM","selected":false,"highlighted":false}'
        >
          <a
            id="BM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bm"></span>
            <span id="" className="country-name" data-uia="">
              Bermuda <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BT","selected":false,"highlighted":false}'
        >
          <a
            id="BT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bt"></span>
            <span id="" className="country-name" data-uia="">
              Bhutan <em className="country-code"> +975</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BO","selected":false,"highlighted":false}'
        >
          <a
            id="BO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bo"></span>
            <span id="" className="country-name" data-uia="">
              Bolivia <em className="country-code"> +591</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BA","selected":false,"highlighted":false}'
        >
          <a
            id="BA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ba"></span>
            <span id="" className="country-name" data-uia="">
              Bosnia &amp; Herzegovina
              <em className="country-code"> +387</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BW","selected":false,"highlighted":false}'
        >
          <a
            id="BW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bw"></span>
            <span id="" className="country-name" data-uia="">
              Botswana <em className="country-code"> +267</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BV"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BV","selected":false,"highlighted":false}'
        >
          <a
            id="BV"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bv"></span>
            <span id="" className="country-name" data-uia="">
              Bouvet Island <em className="country-code"> +47</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BR","selected":false,"highlighted":false}'
        >
          <a
            id="BR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-br"></span>
            <span id="" className="country-name" data-uia="">
              Brazil <em className="country-code"> +55</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IO","selected":false,"highlighted":false}'
        >
          <a
            id="IO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-io"></span>
            <span id="" className="country-name" data-uia="">
              British Indian Ocean Territory
              <em className="country-code"> +246</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-VG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"VG","selected":false,"highlighted":false}'
        >
          <a
            id="VG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-vg"></span>
            <span id="" className="country-name" data-uia="">
              British Virgin Islands <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BN","selected":false,"highlighted":false}'
        >
          <a
            id="BN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bn"></span>
            <span id="" className="country-name" data-uia="">
              Brunei <em className="country-code"> +673</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BG","selected":false,"highlighted":false}'
        >
          <a
            id="BG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bg"></span>
            <span id="" className="country-name" data-uia="">
              Bulgaria <em className="country-code"> +359</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BF","selected":false,"highlighted":false}'
        >
          <a
            id="BF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bf"></span>
            <span id="" className="country-name" data-uia="">
              Burkina Faso <em className="country-code"> +226</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BI","selected":false,"highlighted":false}'
        >
          <a
            id="BI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bi"></span>
            <span id="" className="country-name" data-uia="">
              Burundi <em className="country-code"> +257</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KH","selected":false,"highlighted":false}'
        >
          <a
            id="KH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-kh"></span>
            <span id="" className="country-name" data-uia="">
              Cambodia <em className="country-code"> +855</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CM","selected":false,"highlighted":false}'
        >
          <a
            id="CM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cm"></span>
            <span id="" className="country-name" data-uia="">
              Cameroon <em className="country-code"> +237</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CA","selected":false,"highlighted":false}'
        >
          <a
            id="CA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ca"></span>
            <span id="" className="country-name" data-uia="">
              Canada <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CV"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CV","selected":false,"highlighted":false}'
        >
          <a
            id="CV"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cv"></span>
            <span id="" className="country-name" data-uia="">
              Cape Verde <em className="country-code"> +238</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BQ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BQ","selected":false,"highlighted":false}'
        >
          <a
            id="BQ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bq"></span>
            <span id="" className="country-name" data-uia="">
              Caribbean Netherlands <em className="country-code"> +599</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KY","selected":false,"highlighted":false}'
        >
          <a
            id="KY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ky"></span>
            <span id="" className="country-name" data-uia="">
              Cayman Islands <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CF","selected":false,"highlighted":false}'
        >
          <a
            id="CF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cf"></span>
            <span id="" className="country-name" data-uia="">
              Central African Republic
              <em className="country-code"> +236</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TD"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TD","selected":false,"highlighted":false}'
        >
          <a
            id="TD"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-td"></span>
            <span id="" className="country-name" data-uia="">
              Chad <em className="country-code"> +235</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CL","selected":false,"highlighted":false}'
        >
          <a
            id="CL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cl"></span>
            <span id="" className="country-name" data-uia="">
              Chile <em className="country-code"> +56</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CN","selected":false,"highlighted":false}'
        >
          <a
            id="CN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cn"></span>
            <span id="" className="country-name" data-uia="">
              China <em className="country-code"> +86</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CX"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CX","selected":false,"highlighted":false}'
        >
          <a
            id="CX"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cx"></span>
            <span id="" className="country-name" data-uia="">
              Christmas Island <em className="country-code"> +61</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CC","selected":false,"highlighted":false}'
        >
          <a
            id="CC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cc"></span>
            <span id="" className="country-name" data-uia="">
              Cocos (Keeling) Islands <em className="country-code"> +61</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CO","selected":false,"highlighted":false}'
        >
          <a
            id="CO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-co"></span>
            <span id="" className="country-name" data-uia="">
              Colombia <em className="country-code"> +57</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KM","selected":false,"highlighted":false}'
        >
          <a
            id="KM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-km"></span>
            <span id="" className="country-name" data-uia="">
              Comoros <em className="country-code"> +269</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CG","selected":false,"highlighted":false}'
        >
          <a
            id="CG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cg"></span>
            <span id="" className="country-name" data-uia="">
              Congo - Brazzaville <em className="country-code"> +242</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CD"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CD","selected":false,"highlighted":false}'
        >
          <a
            id="CD"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cd"></span>
            <span id="" className="country-name" data-uia="">
              Congo - Kinshasa <em className="country-code"> +243</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CK","selected":false,"highlighted":false}'
        >
          <a
            id="CK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ck"></span>
            <span id="" className="country-name" data-uia="">
              Cook Islands <em className="country-code"> +682</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CR","selected":false,"highlighted":false}'
        >
          <a
            id="CR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cr"></span>
            <span id="" className="country-name" data-uia="">
              Costa Rica <em className="country-code"> +506</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CI","selected":false,"highlighted":false}'
        >
          <a
            id="CI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ci"></span>
            <span id="" className="country-name" data-uia="">
              Côte d’Ivoire <em className="country-code"> +225</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-HR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"HR","selected":false,"highlighted":false}'
        >
          <a
            id="HR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-hr"></span>
            <span id="" className="country-name" data-uia="">
              Croatia <em className="country-code"> +385</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CU","selected":false,"highlighted":false}'
        >
          <a
            id="CU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cu"></span>
            <span id="" className="country-name" data-uia="">
              Cuba <em className="country-code"> +53</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AN","selected":false,"highlighted":false}'
        >
          <a
            id="AN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-an"></span>
            <span id="" className="country-name" data-uia="">
              Curaçao <em className="country-code"> +599</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CW","selected":false,"highlighted":false}'
        >
          <a
            id="CW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cw"></span>
            <span id="" className="country-name" data-uia="">
              Curaçao <em className="country-code"> +599</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CY","selected":false,"highlighted":false}'
        >
          <a
            id="CY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cy"></span>
            <span id="" className="country-name" data-uia="">
              Cyprus <em className="country-code"> +357</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CZ","selected":false,"highlighted":false}'
        >
          <a
            id="CZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-cz"></span>
            <span id="" className="country-name" data-uia="">
              Czechia <em className="country-code"> +420</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-DK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"DK","selected":false,"highlighted":false}'
        >
          <a
            id="DK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-dk"></span>
            <span id="" className="country-name" data-uia="">
              Denmark <em className="country-code"> +45</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-DJ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"DJ","selected":false,"highlighted":false}'
        >
          <a
            id="DJ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-dj"></span>
            <span id="" className="country-name" data-uia="">
              Djibouti <em className="country-code"> +253</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-DM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"DM","selected":false,"highlighted":false}'
        >
          <a
            id="DM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-dm"></span>
            <span id="" className="country-name" data-uia="">
              Dominica <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-DO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"DO","selected":false,"highlighted":false}'
        >
          <a
            id="DO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-do"></span>
            <span id="" className="country-name" data-uia="">
              Dominican Republic <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-EC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"EC","selected":false,"highlighted":false}'
        >
          <a
            id="EC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ec"></span>
            <span id="" className="country-name" data-uia="">
              Ecuador <em className="country-code"> +593</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-EG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"EG","selected":false,"highlighted":false}'
        >
          <a
            id="EG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-eg"></span>
            <span id="" className="country-name" data-uia="">
              Egypt <em className="country-code"> +20</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SV"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SV","selected":false,"highlighted":false}'
        >
          <a
            id="SV"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sv"></span>
            <span id="" className="country-name" data-uia="">
              El Salvador <em className="country-code"> +503</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GQ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GQ","selected":false,"highlighted":false}'
        >
          <a
            id="GQ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gq"></span>
            <span id="" className="country-name" data-uia="">
              Equatorial Guinea <em className="country-code"> +240</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ER"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ER","selected":false,"highlighted":false}'
        >
          <a
            id="ER"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-er"></span>
            <span id="" className="country-name" data-uia="">
              Eritrea <em className="country-code"> +291</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-EE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"EE","selected":false,"highlighted":false}'
        >
          <a
            id="EE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ee"></span>
            <span id="" className="country-name" data-uia="">
              Estonia <em className="country-code"> +372</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ET"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ET","selected":false,"highlighted":false}'
        >
          <a
            id="ET"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-et"></span>
            <span id="" className="country-name" data-uia="">
              Ethiopia <em className="country-code"> +251</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-FK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"FK","selected":false,"highlighted":false}'
        >
          <a
            id="FK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-fk"></span>
            <span id="" className="country-name" data-uia="">
              Falkland Islands <em className="country-code"> +500</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-FO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"FO","selected":false,"highlighted":false}'
        >
          <a
            id="FO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-fo"></span>
            <span id="" className="country-name" data-uia="">
              Faroe Islands <em className="country-code"> +298</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-FJ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"FJ","selected":false,"highlighted":false}'
        >
          <a
            id="FJ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-fj"></span>
            <span id="" className="country-name" data-uia="">
              Fiji <em className="country-code"> +679</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-FI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"FI","selected":false,"highlighted":false}'
        >
          <a
            id="FI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-fi"></span>
            <span id="" className="country-name" data-uia="">
              Finland <em className="country-code"> +358</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-FR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"FR","selected":false,"highlighted":false}'
        >
          <a
            id="FR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-fr"></span>
            <span id="" className="country-name" data-uia="">
              France <em className="country-code"> +33</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GF","selected":false,"highlighted":false}'
        >
          <a
            id="GF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gf"></span>
            <span id="" className="country-name" data-uia="">
              French Guiana <em className="country-code"> +594</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PF","selected":false,"highlighted":false}'
        >
          <a
            id="PF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pf"></span>
            <span id="" className="country-name" data-uia="">
              French Polynesia <em className="country-code"> +689</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TF","selected":false,"highlighted":false}'
        >
          <a
            id="TF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tf"></span>
            <span id="" className="country-name" data-uia="">
              French Southern Territories
              <em className="country-code"> +262</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GA","selected":false,"highlighted":false}'
        >
          <a
            id="GA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ga"></span>
            <span id="" className="country-name" data-uia="">
              Gabon <em className="country-code"> +241</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GM","selected":false,"highlighted":false}'
        >
          <a
            id="GM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gm"></span>
            <span id="" className="country-name" data-uia="">
              Gambia <em className="country-code"> +220</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GE","selected":false,"highlighted":false}'
        >
          <a
            id="GE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ge"></span>
            <span id="" className="country-name" data-uia="">
              Georgia <em className="country-code"> +995</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-DE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"DE","selected":false,"highlighted":false}'
        >
          <a
            id="DE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-de"></span>
            <span id="" className="country-name" data-uia="">
              Germany <em className="country-code"> +49</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GH","selected":false,"highlighted":false}'
        >
          <a
            id="GH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gh"></span>
            <span id="" className="country-name" data-uia="">
              Ghana <em className="country-code"> +233</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GI","selected":false,"highlighted":false}'
        >
          <a
            id="GI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gi"></span>
            <span id="" className="country-name" data-uia="">
              Gibraltar <em className="country-code"> +350</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GR","selected":false,"highlighted":false}'
        >
          <a
            id="GR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gr"></span>
            <span id="" className="country-name" data-uia="">
              Greece <em className="country-code"> +30</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GL","selected":false,"highlighted":false}'
        >
          <a
            id="GL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gl"></span>
            <span id="" className="country-name" data-uia="">
              Greenland <em className="country-code"> +299</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GD"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GD","selected":false,"highlighted":false}'
        >
          <a
            id="GD"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gd"></span>
            <span id="" className="country-name" data-uia="">
              Grenada <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GP"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GP","selected":false,"highlighted":false}'
        >
          <a
            id="GP"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gp"></span>
            <span id="" className="country-name" data-uia="">
              Guadeloupe <em className="country-code"> +590</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GU","selected":false,"highlighted":false}'
        >
          <a
            id="GU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gu"></span>
            <span id="" className="country-name" data-uia="">
              Guam <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GT","selected":false,"highlighted":false}'
        >
          <a
            id="GT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gt"></span>
            <span id="" className="country-name" data-uia="">
              Guatemala <em className="country-code"> +502</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GG","selected":false,"highlighted":false}'
        >
          <a
            id="GG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gg"></span>
            <span id="" className="country-name" data-uia="">
              Guernsey <em className="country-code"> +44</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GN","selected":false,"highlighted":false}'
        >
          <a
            id="GN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gn"></span>
            <span id="" className="country-name" data-uia="">
              Guinea <em className="country-code"> +224</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GW","selected":false,"highlighted":false}'
        >
          <a
            id="GW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gw"></span>
            <span id="" className="country-name" data-uia="">
              Guinea-Bissau <em className="country-code"> +245</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GY","selected":false,"highlighted":false}'
        >
          <a
            id="GY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gy"></span>
            <span id="" className="country-name" data-uia="">
              Guyana <em className="country-code"> +592</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-HT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"HT","selected":false,"highlighted":false}'
        >
          <a
            id="HT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ht"></span>
            <span id="" className="country-name" data-uia="">
              Haiti <em className="country-code"> +509</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-HM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"HM","selected":false,"highlighted":false}'
        >
          <a
            id="HM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-hm"></span>
            <span id="" className="country-name" data-uia="">
              Heard &amp; McDonald Islands
              <em className="country-code"> +672</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-HN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"HN","selected":false,"highlighted":false}'
        >
          <a
            id="HN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-hn"></span>
            <span id="" className="country-name" data-uia="">
              Honduras <em className="country-code"> +504</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-HK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"HK","selected":false,"highlighted":false}'
        >
          <a
            id="HK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-hk"></span>
            <span id="" className="country-name" data-uia="">
              Hong Kong SAR China <em className="country-code"> +852</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-HU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"HU","selected":false,"highlighted":false}'
        >
          <a
            id="HU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-hu"></span>
            <span id="" className="country-name" data-uia="">
              Hungary <em className="country-code"> +36</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IS","selected":false,"highlighted":false}'
        >
          <a
            id="IS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-is"></span>
            <span id="" className="country-name" data-uia="">
              Iceland <em className="country-code"> +354</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IN","selected":false,"highlighted":false}'
        >
          <a
            id="IN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-in"></span>
            <span id="" className="country-name" data-uia="">
              India <em className="country-code"> +91</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ID"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ID","selected":false,"highlighted":false}'
        >
          <a
            id="ID"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-id"></span>
            <span id="" className="country-name" data-uia="">
              Indonesia <em className="country-code"> +62</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IR","selected":false,"highlighted":false}'
        >
          <a
            id="IR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ir"></span>
            <span id="" className="country-name" data-uia="">
              Iran <em className="country-code"> +98</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IQ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IQ","selected":false,"highlighted":false}'
        >
          <a
            id="IQ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-iq"></span>
            <span id="" className="country-name" data-uia="">
              Iraq <em className="country-code"> +964</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IE","selected":false,"highlighted":false}'
        >
          <a
            id="IE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ie"></span>
            <span id="" className="country-name" data-uia="">
              Ireland <em className="country-code"> +353</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IM","selected":false,"highlighted":false}'
        >
          <a
            id="IM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-im"></span>
            <span id="" className="country-name" data-uia="">
              Isle of Man <em className="country-code"> +44</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IL","selected":false,"highlighted":false}'
        >
          <a
            id="IL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-il"></span>
            <span id="" className="country-name" data-uia="">
              Israel <em className="country-code"> +972</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-IT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"IT","selected":false,"highlighted":false}'
        >
          <a
            id="IT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-it"></span>
            <span id="" className="country-name" data-uia="">
              Italy <em className="country-code"> +39</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-JM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"JM","selected":false,"highlighted":false}'
        >
          <a
            id="JM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-jm"></span>
            <span id="" className="country-name" data-uia="">
              Jamaica <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-JP"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"JP","selected":false,"highlighted":false}'
        >
          <a
            id="JP"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-jp"></span>
            <span id="" className="country-name" data-uia="">
              Japan <em className="country-code"> +81</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-JE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"JE","selected":false,"highlighted":false}'
        >
          <a
            id="JE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-je"></span>
            <span id="" className="country-name" data-uia="">
              Jersey <em className="country-code"> +44</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-JO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"JO","selected":false,"highlighted":false}'
        >
          <a
            id="JO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-jo"></span>
            <span id="" className="country-name" data-uia="">
              Jordan <em className="country-code"> +962</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KZ","selected":false,"highlighted":false}'
        >
          <a
            id="KZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-kz"></span>
            <span id="" className="country-name" data-uia="">
              Kazakhstan <em className="country-code"> +7</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KE","selected":false,"highlighted":false}'
        >
          <a
            id="KE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ke"></span>
            <span id="" className="country-name" data-uia="">
              Kenya <em className="country-code"> +254</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KI","selected":false,"highlighted":false}'
        >
          <a
            id="KI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ki"></span>
            <span id="" className="country-name" data-uia="">
              Kiribati <em className="country-code"> +686</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-XK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"XK","selected":false,"highlighted":false}'
        >
          <a
            id="XK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-xk"></span>
            <span id="" className="country-name" data-uia="">
              Kosovo <em className="country-code"> +383</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KW","selected":false,"highlighted":false}'
        >
          <a
            id="KW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-kw"></span>
            <span id="" className="country-name" data-uia="">
              Kuwait <em className="country-code"> +965</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KG","selected":false,"highlighted":false}'
        >
          <a
            id="KG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-kg"></span>
            <span id="" className="country-name" data-uia="">
              Kyrgyzstan <em className="country-code"> +996</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LA","selected":false,"highlighted":false}'
        >
          <a
            id="LA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-la"></span>
            <span id="" className="country-name" data-uia="">
              Laos <em className="country-code"> +856</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LV"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LV","selected":false,"highlighted":false}'
        >
          <a
            id="LV"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-lv"></span>
            <span id="" className="country-name" data-uia="">
              Latvia <em className="country-code"> +371</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LB"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LB","selected":false,"highlighted":false}'
        >
          <a
            id="LB"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-lb"></span>
            <span id="" className="country-name" data-uia="">
              Lebanon <em className="country-code"> +961</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LS","selected":false,"highlighted":false}'
        >
          <a
            id="LS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ls"></span>
            <span id="" className="country-name" data-uia="">
              Lesotho <em className="country-code"> +266</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LR","selected":false,"highlighted":false}'
        >
          <a
            id="LR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-lr"></span>
            <span id="" className="country-name" data-uia="">
              Liberia <em className="country-code"> +231</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LY","selected":false,"highlighted":false}'
        >
          <a
            id="LY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ly"></span>
            <span id="" className="country-name" data-uia="">
              Libya <em className="country-code"> +218</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LI","selected":false,"highlighted":false}'
        >
          <a
            id="LI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-li"></span>
            <span id="" className="country-name" data-uia="">
              Liechtenstein <em className="country-code"> +423</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LT","selected":false,"highlighted":false}'
        >
          <a
            id="LT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-lt"></span>
            <span id="" className="country-name" data-uia="">
              Lithuania <em className="country-code"> +370</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LU","selected":false,"highlighted":false}'
        >
          <a
            id="LU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-lu"></span>
            <span id="" className="country-name" data-uia="">
              Luxembourg <em className="country-code"> +352</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MO","selected":false,"highlighted":false}'
        >
          <a
            id="MO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mo"></span>
            <span id="" className="country-name" data-uia="">
              Macau SAR China <em className="country-code"> +853</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MK","selected":false,"highlighted":false}'
        >
          <a
            id="MK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mk"></span>
            <span id="" className="country-name" data-uia="">
              Macedonia <em className="country-code"> +389</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MG","selected":false,"highlighted":false}'
        >
          <a
            id="MG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mg"></span>
            <span id="" className="country-name" data-uia="">
              Madagascar <em className="country-code"> +261</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MW","selected":false,"highlighted":false}'
        >
          <a
            id="MW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mw"></span>
            <span id="" className="country-name" data-uia="">
              Malawi <em className="country-code"> +265</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MY","selected":false,"highlighted":false}'
        >
          <a
            id="MY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-my"></span>
            <span id="" className="country-name" data-uia="">
              Malaysia <em className="country-code"> +60</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MV"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MV","selected":false,"highlighted":false}'
        >
          <a
            id="MV"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mv"></span>
            <span id="" className="country-name" data-uia="">
              Maldives <em className="country-code"> +960</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ML"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ML","selected":false,"highlighted":false}'
        >
          <a
            id="ML"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ml"></span>
            <span id="" className="country-name" data-uia="">
              Mali <em className="country-code"> +223</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MT","selected":false,"highlighted":false}'
        >
          <a
            id="MT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mt"></span>
            <span id="" className="country-name" data-uia="">
              Malta <em className="country-code"> +356</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MH","selected":false,"highlighted":false}'
        >
          <a
            id="MH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mh"></span>
            <span id="" className="country-name" data-uia="">
              Marshall Islands <em className="country-code"> +692</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MQ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MQ","selected":false,"highlighted":false}'
        >
          <a
            id="MQ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mq"></span>
            <span id="" className="country-name" data-uia="">
              Martinique <em className="country-code"> +596</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MR","selected":false,"highlighted":false}'
        >
          <a
            id="MR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mr"></span>
            <span id="" className="country-name" data-uia="">
              Mauritania <em className="country-code"> +222</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MU","selected":false,"highlighted":false}'
        >
          <a
            id="MU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mu"></span>
            <span id="" className="country-name" data-uia="">
              Mauritius <em className="country-code"> +230</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-YT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"YT","selected":false,"highlighted":false}'
        >
          <a
            id="YT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-yt"></span>
            <span id="" className="country-name" data-uia="">
              Mayotte <em className="country-code"> +262</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MX"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MX","selected":false,"highlighted":false}'
        >
          <a
            id="MX"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mx"></span>
            <span id="" className="country-name" data-uia="">
              Mexico <em className="country-code"> +52</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-FM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"FM","selected":false,"highlighted":false}'
        >
          <a
            id="FM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-fm"></span>
            <span id="" className="country-name" data-uia="">
              Micronesia <em className="country-code"> +691</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MD"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MD","selected":false,"highlighted":false}'
        >
          <a
            id="MD"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-md"></span>
            <span id="" className="country-name" data-uia="">
              Moldova <em className="country-code"> +373</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MC","selected":false,"highlighted":false}'
        >
          <a
            id="MC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mc"></span>
            <span id="" className="country-name" data-uia="">
              Monaco <em className="country-code"> +377</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MN","selected":false,"highlighted":false}'
        >
          <a
            id="MN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mn"></span>
            <span id="" className="country-name" data-uia="">
              Mongolia <em className="country-code"> +976</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ME"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ME","selected":false,"highlighted":false}'
        >
          <a
            id="ME"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-me"></span>
            <span id="" className="country-name" data-uia="">
              Montenegro <em className="country-code"> +382</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MS","selected":false,"highlighted":false}'
        >
          <a
            id="MS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ms"></span>
            <span id="" className="country-name" data-uia="">
              Montserrat <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MA","selected":false,"highlighted":false}'
        >
          <a
            id="MA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ma"></span>
            <span id="" className="country-name" data-uia="">
              Morocco <em className="country-code"> +212</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MZ","selected":false,"highlighted":false}'
        >
          <a
            id="MZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mz"></span>
            <span id="" className="country-name" data-uia="">
              Mozambique <em className="country-code"> +258</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MM","selected":false,"highlighted":false}'
        >
          <a
            id="MM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mm"></span>
            <span id="" className="country-name" data-uia="">
              Myanmar (Burma) <em className="country-code"> +95</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NA","selected":false,"highlighted":false}'
        >
          <a
            id="NA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-na"></span>
            <span id="" className="country-name" data-uia="">
              Namibia <em className="country-code"> +264</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NR","selected":false,"highlighted":false}'
        >
          <a
            id="NR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-nr"></span>
            <span id="" className="country-name" data-uia="">
              Nauru <em className="country-code"> +674</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NP"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NP","selected":false,"highlighted":false}'
        >
          <a
            id="NP"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-np"></span>
            <span id="" className="country-name" data-uia="">
              Nepal <em className="country-code"> +977</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NL","selected":false,"highlighted":false}'
        >
          <a
            id="NL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-nl"></span>
            <span id="" className="country-name" data-uia="">
              Netherlands <em className="country-code"> +31</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NC","selected":false,"highlighted":false}'
        >
          <a
            id="NC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-nc"></span>
            <span id="" className="country-name" data-uia="">
              New Caledonia <em className="country-code"> +687</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NZ","selected":false,"highlighted":false}'
        >
          <a
            id="NZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-nz"></span>
            <span id="" className="country-name" data-uia="">
              New Zealand <em className="country-code"> +64</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NI","selected":false,"highlighted":false}'
        >
          <a
            id="NI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ni"></span>
            <span id="" className="country-name" data-uia="">
              Nicaragua <em className="country-code"> +505</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NE","selected":false,"highlighted":false}'
        >
          <a
            id="NE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ne"></span>
            <span id="" className="country-name" data-uia="">
              Niger <em className="country-code"> +227</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NG","selected":false,"highlighted":false}'
        >
          <a
            id="NG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ng"></span>
            <span id="" className="country-name" data-uia="">
              Nigeria <em className="country-code"> +234</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NU","selected":false,"highlighted":false}'
        >
          <a
            id="NU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-nu"></span>
            <span id="" className="country-name" data-uia="">
              Niue <em className="country-code"> +683</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NF","selected":false,"highlighted":false}'
        >
          <a
            id="NF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-nf"></span>
            <span id="" className="country-name" data-uia="">
              Norfolk Island <em className="country-code"> +672</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MP"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MP","selected":false,"highlighted":false}'
        >
          <a
            id="MP"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mp"></span>
            <span id="" className="country-name" data-uia="">
              Northern Mariana Islands <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KP"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KP","selected":false,"highlighted":false}'
        >
          <a
            id="KP"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-kp"></span>
            <span id="" className="country-name" data-uia="">
              North Korea <em className="country-code"> +850</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-NO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"NO","selected":false,"highlighted":false}'
        >
          <a
            id="NO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-no"></span>
            <span id="" className="country-name" data-uia="">
              Norway <em className="country-code"> +47</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-OM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"OM","selected":false,"highlighted":false}'
        >
          <a
            id="OM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-om"></span>
            <span id="" className="country-name" data-uia="">
              Oman <em className="country-code"> +968</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PK","selected":false,"highlighted":false}'
        >
          <a
            id="PK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pk"></span>
            <span id="" className="country-name" data-uia="">
              Pakistan <em className="country-code"> +92</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PW","selected":false,"highlighted":false}'
        >
          <a
            id="PW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pw"></span>
            <span id="" className="country-name" data-uia="">
              Palau <em className="country-code"> +680</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PS","selected":false,"highlighted":false}'
        >
          <a
            id="PS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ps"></span>
            <span id="" className="country-name" data-uia="">
              Palestinian Territories <em className="country-code"> +970</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PA","selected":false,"highlighted":false}'
        >
          <a
            id="PA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pa"></span>
            <span id="" className="country-name" data-uia="">
              Panama <em className="country-code"> +507</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PG","selected":false,"highlighted":false}'
        >
          <a
            id="PG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pg"></span>
            <span id="" className="country-name" data-uia="">
              Papua New Guinea <em className="country-code"> +675</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PY","selected":false,"highlighted":false}'
        >
          <a
            id="PY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-py"></span>
            <span id="" className="country-name" data-uia="">
              Paraguay <em className="country-code"> +595</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PE","selected":false,"highlighted":false}'
        >
          <a
            id="PE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pe"></span>
            <span id="" className="country-name" data-uia="">
              Peru <em className="country-code"> +51</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PH","selected":false,"highlighted":false}'
        >
          <a
            id="PH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ph"></span>
            <span id="" className="country-name" data-uia="">
              Philippines <em className="country-code"> +63</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PN","selected":false,"highlighted":false}'
        >
          <a
            id="PN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pn"></span>
            <span id="" className="country-name" data-uia="">
              Pitcairn Islands <em className="country-code"> +64</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PL","selected":false,"highlighted":false}'
        >
          <a
            id="PL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pl"></span>
            <span id="" className="country-name" data-uia="">
              Poland <em className="country-code"> +48</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PT","selected":false,"highlighted":false}'
        >
          <a
            id="PT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pt"></span>
            <span id="" className="country-name" data-uia="">
              Portugal <em className="country-code"> +351</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PR","selected":false,"highlighted":false}'
        >
          <a
            id="PR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pr"></span>
            <span id="" className="country-name" data-uia="">
              Puerto Rico <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-QA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"QA","selected":false,"highlighted":false}'
        >
          <a
            id="QA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-qa"></span>
            <span id="" className="country-name" data-uia="">
              Qatar <em className="country-code"> +974</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-RE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"RE","selected":false,"highlighted":false}'
        >
          <a
            id="RE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-re"></span>
            <span id="" className="country-name" data-uia="">
              Réunion <em className="country-code"> +262</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-RO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"RO","selected":false,"highlighted":false}'
        >
          <a
            id="RO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ro"></span>
            <span id="" className="country-name" data-uia="">
              Romania <em className="country-code"> +40</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-RU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"RU","selected":false,"highlighted":false}'
        >
          <a
            id="RU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ru"></span>
            <span id="" className="country-name" data-uia="">
              Russia <em className="country-code"> +7</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-RW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"RW","selected":false,"highlighted":false}'
        >
          <a
            id="RW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-rw"></span>
            <span id="" className="country-name" data-uia="">
              Rwanda <em className="country-code"> +250</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-WS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"WS","selected":false,"highlighted":false}'
        >
          <a
            id="WS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ws"></span>
            <span id="" className="country-name" data-uia="">
              Samoa <em className="country-code"> +685</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SM","selected":false,"highlighted":false}'
        >
          <a
            id="SM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sm"></span>
            <span id="" className="country-name" data-uia="">
              San Marino <em className="country-code"> +378</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ST"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ST","selected":false,"highlighted":false}'
        >
          <a
            id="ST"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-st"></span>
            <span id="" className="country-name" data-uia="">
              São Tomé &amp; Príncipe <em className="country-code"> +239</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SA","selected":false,"highlighted":false}'
        >
          <a
            id="SA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sa"></span>
            <span id="" className="country-name" data-uia="">
              Saudi Arabia <em className="country-code"> +966</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SN","selected":false,"highlighted":false}'
        >
          <a
            id="SN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sn"></span>
            <span id="" className="country-name" data-uia="">
              Senegal <em className="country-code"> +221</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-RS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"RS","selected":false,"highlighted":false}'
        >
          <a
            id="RS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-rs"></span>
            <span id="" className="country-name" data-uia="">
              Serbia <em className="country-code"> +381</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SC","selected":false,"highlighted":false}'
        >
          <a
            id="SC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sc"></span>
            <span id="" className="country-name" data-uia="">
              Seychelles <em className="country-code"> +248</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SL","selected":false,"highlighted":false}'
        >
          <a
            id="SL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sl"></span>
            <span id="" className="country-name" data-uia="">
              Sierra Leone <em className="country-code"> +232</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SG","selected":false,"highlighted":false}'
        >
          <a
            id="SG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sg"></span>
            <span id="" className="country-name" data-uia="">
              Singapore <em className="country-code"> +65</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SX"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SX","selected":false,"highlighted":false}'
        >
          <a
            id="SX"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sx"></span>
            <span id="" className="country-name" data-uia="">
              Sint Maarten <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SK","selected":false,"highlighted":false}'
        >
          <a
            id="SK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sk"></span>
            <span id="" className="country-name" data-uia="">
              Slovakia <em className="country-code"> +421</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SI","selected":false,"highlighted":false}'
        >
          <a
            id="SI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-si"></span>
            <span id="" className="country-name" data-uia="">
              Slovenia <em className="country-code"> +386</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SB"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SB","selected":false,"highlighted":false}'
        >
          <a
            id="SB"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sb"></span>
            <span id="" className="country-name" data-uia="">
              Solomon Islands <em className="country-code"> +677</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SO","selected":false,"highlighted":false}'
        >
          <a
            id="SO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-so"></span>
            <span id="" className="country-name" data-uia="">
              Somalia <em className="country-code"> +252</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ZA"
          className="flag-select-option ui-select-item ui-select-item-selected"
          placeholder='{"id":"ZA","selected":true,"highlighted":false}'
        >
          <a
            id="ZA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-za"></span>
            <span id="" className="country-name" data-uia="">
              South Africa <em className="country-code"> +27</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GS","selected":false,"highlighted":false}'
        >
          <a
            id="GS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gs"></span>
            <span id="" className="country-name" data-uia="">
              South Georgia &amp; South Sandwich Islands
              <em className="country-code"> +500</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KR","selected":false,"highlighted":false}'
        >
          <a
            id="KR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-kr"></span>
            <span id="" className="country-name" data-uia="">
              South Korea <em className="country-code"> +82</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SS"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SS","selected":false,"highlighted":false}'
        >
          <a
            id="SS"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ss"></span>
            <span id="" className="country-name" data-uia="">
              South Sudan <em className="country-code"> +211</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ES"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ES","selected":false,"highlighted":false}'
        >
          <a
            id="ES"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-es"></span>
            <span id="" className="country-name" data-uia="">
              Spain <em className="country-code"> +34</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LK","selected":false,"highlighted":false}'
        >
          <a
            id="LK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-lk"></span>
            <span id="" className="country-name" data-uia="">
              Sri Lanka <em className="country-code"> +94</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-BL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"BL","selected":false,"highlighted":false}'
        >
          <a
            id="BL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-bl"></span>
            <span id="" className="country-name" data-uia="">
              St. Barthélemy <em className="country-code"> +590</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SH","selected":false,"highlighted":false}'
        >
          <a
            id="SH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sh"></span>
            <span id="" className="country-name" data-uia="">
              St. Helena <em className="country-code"> +290</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-KN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"KN","selected":false,"highlighted":false}'
        >
          <a
            id="KN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-kn"></span>
            <span id="" className="country-name" data-uia="">
              St. Kitts &amp; Nevis <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-LC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"LC","selected":false,"highlighted":false}'
        >
          <a
            id="LC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-lc"></span>
            <span id="" className="country-name" data-uia="">
              St. Lucia <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-MF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"MF","selected":false,"highlighted":false}'
        >
          <a
            id="MF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-mf"></span>
            <span id="" className="country-name" data-uia="">
              St. Martin <em className="country-code"> +590</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-PM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"PM","selected":false,"highlighted":false}'
        >
          <a
            id="PM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-pm"></span>
            <span id="" className="country-name" data-uia="">
              St. Pierre &amp; Miquelon
              <em className="country-code"> +508</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-VC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"VC","selected":false,"highlighted":false}'
        >
          <a
            id="VC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-vc"></span>
            <span id="" className="country-name" data-uia="">
              St. Vincent &amp; Grenadines
              <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SD"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SD","selected":false,"highlighted":false}'
        >
          <a
            id="SD"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sd"></span>
            <span id="" className="country-name" data-uia="">
              Sudan <em className="country-code"> +249</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SR","selected":false,"highlighted":false}'
        >
          <a
            id="SR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sr"></span>
            <span id="" className="country-name" data-uia="">
              Suriname <em className="country-code"> +597</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SJ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SJ","selected":false,"highlighted":false}'
        >
          <a
            id="SJ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sj"></span>
            <span id="" className="country-name" data-uia="">
              Svalbard &amp; Jan Mayen <em className="country-code"> +47</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SZ","selected":false,"highlighted":false}'
        >
          <a
            id="SZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sz"></span>
            <span id="" className="country-name" data-uia="">
              Swaziland <em className="country-code"> +268</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SE","selected":false,"highlighted":false}'
        >
          <a
            id="SE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-se"></span>
            <span id="" className="country-name" data-uia="">
              Sweden <em className="country-code"> +46</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-CH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"CH","selected":false,"highlighted":false}'
        >
          <a
            id="CH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ch"></span>
            <span id="" className="country-name" data-uia="">
              Switzerland <em className="country-code"> +41</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-SY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"SY","selected":false,"highlighted":false}'
        >
          <a
            id="SY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-sy"></span>
            <span id="" className="country-name" data-uia="">
              Syria <em className="country-code"> +963</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TW","selected":false,"highlighted":false}'
        >
          <a
            id="TW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tw"></span>
            <span id="" className="country-name" data-uia="">
              Taiwan <em className="country-code"> +886</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TJ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TJ","selected":false,"highlighted":false}'
        >
          <a
            id="TJ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tj"></span>
            <span id="" className="country-name" data-uia="">
              Tajikistan <em className="country-code"> +992</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TZ","selected":false,"highlighted":false}'
        >
          <a
            id="TZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tz"></span>
            <span id="" className="country-name" data-uia="">
              Tanzania <em className="country-code"> +255</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TH","selected":false,"highlighted":false}'
        >
          <a
            id="TH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-th"></span>
            <span id="" className="country-name" data-uia="">
              Thailand <em className="country-code"> +66</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TL"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TL","selected":false,"highlighted":false}'
        >
          <a
            id="TL"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tl"></span>
            <span id="" className="country-name" data-uia="">
              Timor-Leste <em className="country-code"> +670</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TG","selected":false,"highlighted":false}'
        >
          <a
            id="TG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tg"></span>
            <span id="" className="country-name" data-uia="">
              Togo <em className="country-code"> +228</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TK"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TK","selected":false,"highlighted":false}'
        >
          <a
            id="TK"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tk"></span>
            <span id="" className="country-name" data-uia="">
              Tokelau <em className="country-code"> +690</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TO"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TO","selected":false,"highlighted":false}'
        >
          <a
            id="TO"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-to"></span>
            <span id="" className="country-name" data-uia="">
              Tonga <em className="country-code"> +676</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TT"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TT","selected":false,"highlighted":false}'
        >
          <a
            id="TT"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tt"></span>
            <span id="" className="country-name" data-uia="">
              Trinidad &amp; Tobago <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TN","selected":false,"highlighted":false}'
        >
          <a
            id="TN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tn"></span>
            <span id="" className="country-name" data-uia="">
              Tunisia <em className="country-code"> +216</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TR"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TR","selected":false,"highlighted":false}'
        >
          <a
            id="TR"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tr"></span>
            <span id="" className="country-name" data-uia="">
              Turkey <em className="country-code"> +90</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TM","selected":false,"highlighted":false}'
        >
          <a
            id="TM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tm"></span>
            <span id="" className="country-name" data-uia="">
              Turkmenistan <em className="country-code"> +993</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TC"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TC","selected":false,"highlighted":false}'
        >
          <a
            id="TC"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tc"></span>
            <span id="" className="country-name" data-uia="">
              Turks &amp; Caicos Islands
              <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-TV"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"TV","selected":false,"highlighted":false}'
        >
          <a
            id="TV"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-tv"></span>
            <span id="" className="country-name" data-uia="">
              Tuvalu <em className="country-code"> +688</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-UM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"UM","selected":false,"highlighted":false}'
        >
          <a
            id="UM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-um"></span>
            <span id="" className="country-name" data-uia="">
              U.S. Outlying Islands <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-VI"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"VI","selected":false,"highlighted":false}'
        >
          <a
            id="VI"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-vi"></span>
            <span id="" className="country-name" data-uia="">
              U.S. Virgin Islands <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-UG"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"UG","selected":false,"highlighted":false}'
        >
          <a
            id="UG"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ug"></span>
            <span id="" className="country-name" data-uia="">
              Uganda <em className="country-code"> +256</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-UA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"UA","selected":false,"highlighted":false}'
        >
          <a
            id="UA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ua"></span>
            <span id="" className="country-name" data-uia="">
              Ukraine <em className="country-code"> +380</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-AE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"AE","selected":false,"highlighted":false}'
        >
          <a
            id="AE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ae"></span>
            <span id="" className="country-name" data-uia="">
              United Arab Emirates <em className="country-code"> +971</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-GB"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"GB","selected":false,"highlighted":false}'
        >
          <a
            id="GB"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-gb"></span>
            <span id="" className="country-name" data-uia="">
              United Kingdom <em className="country-code"> +44</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-US"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"US","selected":false,"highlighted":false}'
        >
          <a
            id="US"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-us"></span>
            <span id="" className="country-name" data-uia="">
              United States <em className="country-code"> +1</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-UY"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"UY","selected":false,"highlighted":false}'
        >
          <a
            id="UY"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-uy"></span>
            <span id="" className="country-name" data-uia="">
              Uruguay <em className="country-code"> +598</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-UZ"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"UZ","selected":false,"highlighted":false}'
        >
          <a
            id="UZ"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-uz"></span>
            <span id="" className="country-name" data-uia="">
              Uzbekistan <em className="country-code"> +998</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-VU"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"VU","selected":false,"highlighted":false}'
        >
          <a
            id="VU"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-vu"></span>
            <span id="" className="country-name" data-uia="">
              Vanuatu <em className="country-code"> +678</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-VA"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"VA","selected":false,"highlighted":false}'
        >
          <a
            id="VA"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-va"></span>
            <span id="" className="country-name" data-uia="">
              Vatican City <em className="country-code"> +379</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-VE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"VE","selected":false,"highlighted":false}'
        >
          <a
            id="VE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ve"></span>
            <span id="" className="country-name" data-uia="">
              Venezuela <em className="country-code"> +58</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-VN"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"VN","selected":false,"highlighted":false}'
        >
          <a
            id="VN"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-vn"></span>
            <span id="" className="country-name" data-uia="">
              Vietnam <em className="country-code"> +84</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-WF"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"WF","selected":false,"highlighted":false}'
        >
          <a
            id="WF"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-wf"></span>
            <span id="" className="country-name" data-uia="">
              Wallis &amp; Futuna <em className="country-code"> +681</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-EH"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"EH","selected":false,"highlighted":false}'
        >
          <a
            id="EH"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-eh"></span>
            <span id="" className="country-name" data-uia="">
              Western Sahara <em className="country-code"> +212</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-YE"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"YE","selected":false,"highlighted":false}'
        >
          <a
            id="YE"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-ye"></span>
            <span id="" className="country-name" data-uia="">
              Yemen <em className="country-code"> +967</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ZM"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ZM","selected":false,"highlighted":false}'
        >
          <a
            id="ZM"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-zm"></span>
            <span id="" className="country-name" data-uia="">
              Zambia <em className="country-code"> +260</em>
            </span>
          </a>
        </li>
        <li
          data-uia="option-ZW"
          className="flag-select-option ui-select-item"
          placeholder='{"id":"ZW","selected":false,"highlighted":false}'
        >
          <a
            id="ZW"
            onClick={onSelected}
            className="ui-select-item-link clearfix"
          >
            <span className="country-select-flag nf-flag nf-flag-zw"></span>
            <span id="" className="country-name" data-uia="">
              Zimbabwe <em className="country-code"> +263</em>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
