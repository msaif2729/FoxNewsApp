import React, { Component } from 'react'

export class Dropdown extends Component {

    countries = [
        'United Arab Emirates', // ae
        'Argentina',            // ar
        'Austria',             // at
        'Australia',           // au
        'Belgium',             // be
        'Bulgaria',            // bg
        'Brazil',              // br
        'Canada',              // ca
        'Switzerland',         // ch
        'China',               // cn
        'Colombia',            // co
        'Cuba',                // cu
        'Czech Republic',      // cz
        'Germany',             // de
        'Egypt',               // eg
        'France',              // fr
        'United Kingdom',      // gb
        'Greece',              // gr
        'Hong Kong',           // hk
        'Hungary',             // hu
        'Indonesia',           // id
        'Ireland',             // ie
        'Israel',              // il
        'India',               // in
        'Italy',               // it
        'Japan',               // jp
        'South Korea',         // kr
        'Lithuania',           // lt
        'Latvia',              // lv
        'Morocco',             // ma
        'Mexico',              // mx
        'Malaysia',            // my
        'Nigeria',             // ng
        'Netherlands',         // nl
        'Norway',              // no
        'New Zealand',         // nz
        'Philippines',         // ph
        'Poland',              // pl
        'Portugal',            // pt
        'Romania',             // ro
        'Serbia',              // rs
        'Russia',              // ru
        'Saudi Arabia',        // sa
        'Sweden',              // se
        'Singapore',           // sg
        'Slovenia',            // si
        'Slovakia',            // sk
        'Thailand',            // th
        'Turkey',              // tr
        'Taiwan',              // tw
        'Ukraine',             // ua
        'United States',       // us
        'Venezuela',           // ve
        'South Africa'         // za
      ];
      countriescode = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

    state = {
        countries: this.countries,
        selectedCountry: 'United States',
        isDropdownOpen: false
      };
    
      handleSelect = (country,index) => {
        this.setState({ selectedCountry: country, isDropdownOpen: false });
        console.log(this.countriescode[index])
        this.props.datasend(this.countriescode[index]);;

      };
    
      toggleDropdown = () => {
        this.setState((prevState) => ({ isDropdownOpen: !prevState.isDropdownOpen }));
      };
    
      render() {
        const { countries, selectedCountry, isDropdownOpen } = this.state;
    
        return (
          <div>
            <button
              className="dpbtn btn bg-body-tertiary dropdown-toggle"
              type="button"
              aria-expanded={isDropdownOpen}
              id="drop"
              onClick={this.toggleDropdown}
            >
              {selectedCountry}
            </button>
            <div
              className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{height:"200px", overflow:"scroll"}}
            >
              {countries.map((country, index) => (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => this.handleSelect(country,index)}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        );
      }
 

}




export default Dropdown