import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function App() {
    const [open, setOpen] = useState(false);
    const [contract, showContract] = useState(false);
    const [saleAmount, setSaleAmount] = useState(0);

    return (
        <div className="main">
            <div className="container">
                <div>
                    <div className="title">
                        <div className="a">Verse Token</div>
                    </div>
                    <div className="social-icons">
                        <div className="icon">
                            <a
                                href="https://discord.gg/5egkHVvzMg"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-discord"></i>
                            </a>
                        </div>
                        <div className="icon">
                            <a
                                href="https://t.me/versetokenpresale"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-telegram"></i>
                            </a>
                        </div>
                        <div
                            className="icon"
                            onClick={() => showContract(true)}
                        >
                            <a href="javascript:void(0)">
                                <i class="fas fa-file-contract"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <div className="timer">00:00:00</div> */}
                    {
                        <button
                            className="btn"
                            id="buy"
                            onClick={() =>
                                (window.location.href =
                                    "https://traderjoexyz.com/#/trade?inputCurrency=0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7&outputCurrency=0xdb4f2785b30143e4aee78a6c59276af1ee971044")
                            }
                        >
                            Buy now
                        </button>
                    }
                </div>
                <div className="read-more-area">
                    <span className="text">Read More</span>
                    <div className="arrow-down"></div>
                </div>
            </div>
            <div className="documents">
                <div className="back-section">
                    <div className="arrow-up"></div>
                    Back
                </div>
                <h2>
                    <span className="verse-medium dark"></span> Verse Token
                </h2>
                <div className="content">
                    - Total Supply = 5 million
                    <br />
                    - 100K verse TOKEN'S IN PRESALE WILL BE A RATIO of 1:1.
                    PRESALE PRICE = $1 PER VERSE TOKEN. Presale Holders will
                    gain early access to the farm and the physical shop.
                    <br />
                    - 10% locked supply for 4 months totaling 500k verse tokens.
                    Once the 4 months has passed from the initial launch, 50k
                    verse tokens will be burned and 50k verse tokens will be
                    airdropped. 5,000 verse tokens will be given to OG holders
                    of the Infinity Stoners collection. 5,000 verse tokens will
                    be given to OG holders of the Infinity Citizens collection.
                    20,000 verse tokens will be airdropped to the whole
                    community. 4,000 verse tokens will be airdropped to the
                    first 8 holders of the comic book NFTs. 16,000 verse tokens
                    will be given overtime in portions to participents in the
                    community chats.
                    <br />
                    - NFTs will be available at launch for all users.
                    <br />
                    - Fee free/tax free token.
                    <br />
                    - 0% farm deposit fee.
                    <br />
                    - A portion of the proceedings from the physical shop will
                    be used as a buy back mechanism.
                    <br />
                    - 400k verse tokens will be divided between the founders,
                    co-founders, alliances and the community.
                    <br />
                    <br />
                    <u>Marketplace features:</u>
                    <br />
                    - Farm
                    <br />
                    - NFTs
                    <br />
                    - Physical Item Shop and more.
                    <br />
                    <br />
                    Platform launch date: 12/20/2021
                    <br />
                    NFT launch date: 12/20/2021
                    <br />
                    Farm launch date: 12/20/2021
                    <br />
                    <br />
                    The VERSE TOKEN can be used on the INFINITY VERSE platform.
                    <br />
                    <br />
                    <u>FUTURE DEVELOPING</u>
                    <br />
                    - Priority 1: Dex
                    <br />
                    - Priority 2: Game
                    <br />
                    - Priority 3: 3D Verse
                    <br />
                    - Priority 4: Bridge
                    <br />
                    <br />
                    100% of the proceedings that will be gathered from the
                    prelaunch event will be invested towards improving the
                    project.
                </div>
                <div className="credit">
                    Made by{" "}
                    <a
                        href="https://www.instagram.com/professor.dev/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Professor
                    </a>
                </div>
            </div>
            <Modal
                open={contract}
                onClose={() => showContract(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="popup">
                    <h2>Contracts</h2>
                    <a href="https://snowtrace.io/token/0xdb4f2785b30143e4aee78a6c59276af1ee971044">
                        <i class="fas fa-file-contract"></i> Verse Token
                        Contract
                    </a>
                    <br />
                </Box>
            </Modal>
        </div>
    );
}

export default App;
