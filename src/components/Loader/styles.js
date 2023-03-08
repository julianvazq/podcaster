import styled, { keyframes } from 'styled-components';

const wave = keyframes`
0% {
            box-shadow: 0 0 0 0px rgba(79, 145, 201, 1),
                0 0 0 20px rgba(79, 145, 201, 0.2),
                0 0 0 40px rgba(79, 145, 201, 0.6),
                0 0 0 60px rgba(79, 145, 201, 0.4),
                0 0 0 80px rgba(79, 145, 201, 0.2);
        }
        100% {
            box-shadow: 0 0 0 80px rgba(79, 145, 201, 0),
                0 0 0 60px rgba(79, 145, 201, 0.2),
                0 0 0 40px rgba(79, 145, 201, 0.4),
                0 0 0 20px rgba(79, 145, 201, 0.6),
                0 0 0 0px rgba(79, 145, 201, 1);
        }
`;

export const Loader = styled.span`
    width: 24px;
    height: 24px;
    border: 1px solid var(--blue);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    animation: pulse 1s linear infinite;
    &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        border: 2px solid var(--blue);
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: scaleUp 1s linear infinite;

        @keyframes scaleUp {
            0% {
                transform: translate(-50%, -50%) scale(0);
            }
            60%,
            100% {
                transform: translate(-50%, -50%) scale(1);
            }
        }
        @keyframes pulse {
            0%,
            60%,
            100% {
                transform: scale(1);
            }
            80% {
                transform: scale(1.2);
            }
        }
    }

    /* width: 8px;
    height: 8px;
    position: relative;
    border-radius: 50%;
    background: var(--blue);
    animation: ${wave} 1s ease-in infinite; */
`;
