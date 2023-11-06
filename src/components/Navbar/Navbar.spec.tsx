import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import Setup from '../../tests/setup/setup';
import { Mocks } from './tests/mocks/Navbar.mocks';
import { DataTestIds } from './Navbar.constants';

describe('Tests Navbar component functionality', () => {
    it('Snapshots component', () => {
        render(
            <Setup>
                <Navbar userEmail={Mocks.USER_EMAIL} />
            </Setup>
        );

        expect(
            screen.getByTestId(DataTestIds.COMPONENT_CONTAINER)
        ).toMatchSnapshot();
    });

    it('Displays username correctly', () => {
        render(
            <Setup>
                <Navbar userEmail={Mocks.USER_EMAIL} />
            </Setup>
        );

        expect(
            screen.getByTestId(DataTestIds.USER_EMAIL).textContent
        ).toMatchInlineSnapshot(`"diborodin@deloitte.co.il"`);
    });

    it('Displays avatar image', () => {
        render(
            <Setup>
                <Navbar userEmail={Mocks.USER_EMAIL} />
            </Setup>
        );

        const avatar = screen.getByTestId(DataTestIds.USER_AVATAR);

        expect(avatar).toBeInTheDocument();
        expect(avatar).toMatchInlineSnapshot(`
            <button
              class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-uw9pdr-MuiButtonBase-root-MuiIconButton-root"
              data-testid="navbar-avatar__image"
              height="2rem"
              tabindex="0"
              type="button"
              width="2rem"
            >
              <div
                class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2s90m6-MuiAvatar-root"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-10mi8st-MuiSvgIcon-root-MuiAvatar-fallback"
                  data-testid="PersonIcon"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </div>
              <span
                class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
              />
            </button>
        `);
    });
});
