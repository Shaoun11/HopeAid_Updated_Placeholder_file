import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import Clean_Water_Image from '../../public/Clean_Water_Image/530x600.svg';

const CleanWater = () => {
    const [series] = useState([
        {
            name: "Clean Water Bottle Supply",
            data: [1500, 1800, 2100, 2300, 2500, 2700, 2900, 3100, 3900, 3500, 3700, 3900], // Gradual increase
        },
        {
            name: "Total Donation",
            data: [3000, 3400, 3700, 4000, 4400, 6700, 5100, 5500, 5900, 6200, 6600, 9000], // Gradual increase
        }
    ]);

    const [options] = useState({
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#1E90FF', '#66ba69'], // Colors for Clean Water Bottle Supply and Total Donation
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Donation Breakdown',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Amount ($)'
            }
        }
    });

    return (
        <>
            <Navbar />
            <div className="bg-[#fef9f6]">
                <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8">
                    <div className="flex flex-col items-center justify-between lg:flex-row">
                        <div className="">
                            <div className="lg:max-w-xl lg:pr-5">
                                <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-[#30978E] sm:text-6xl">
                                    Clean and Safe  <br />

                                    <span className="my-1 inline-block border-b-8 border-[#30978E] font-bold text-[#30978E]"> Drinking Water</span>
                                </h2>
                                <p className="text-base text-gray-700">Your donations help provide clean and safe drinking water to underprivileged communities, making a lasting impact on their health and quality of life.</p>
                            </div>
                            <div className="mt-10 flex flex-col items-center md:flex-row">
                                <Link to='/checkout'>
                                    <button className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">

                                        Donate Now
                                    </button>
                                </Link>

                            </div>
                            <div className="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x">
                                <div className="flex max-w-xs space-x-2 px-4">

                                    <svg className='-mt-1' width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#068278" d="M476 40c-19.299 0-35 15.701-35 35v103.065c6.709 3.121 12.996 7.447 18.532 12.982 25.388 25.383 25.389 66.542.004 91.927l-56.674 56.674c-5.858 5.858-15.355 5.858-21.213 0s-5.858-15.355 0-21.213l56.673-56.673c13.669-13.669 13.668-35.831-.002-49.499-13.669-13.666-35.827-13.665-49.495.002l-84.146 84.15c-21.719 21.721-33.68 50.6-33.68 81.316l.001 134.269h125c8.284 0 15-6.716 15-15v-53.897c0-8.172 2.881-16.129 8.112-22.407l65.233-78.279c17.189-20.627 26.655-46.773 26.655-73.622v-193.795c0-19.299-15.701-35-35-35zM207.32 296.415l-84.146-84.15c-13.667-13.667-35.826-13.668-49.495-.002-13.67 13.668-13.671 35.83-.002 49.499l56.673 56.673c5.858 5.858 5.858 15.355 0 21.213s-15.355 5.858-21.213 0l-56.674-56.674c-25.385-25.385-25.384-66.544.004-91.927 5.536-5.535 11.823-9.862 18.532-12.982l.001-103.065c0-19.299-15.701-35-35-35s-35 15.701-35 35v193.795c0 26.849 9.466 52.995 26.654 73.621l65.233 78.279c5.231 6.278 8.112 14.235 8.112 22.407v53.898c0 8.284 6.716 15 15 15h125v-134.27c.001-30.715-11.96-59.594-33.679-81.315zM361.964 22.311c-29.11-29.11-76.087-29.734-105.964-1.871-29.876-27.863-76.853-27.239-105.964 1.871-29.749 29.748-29.749 78.153 0 107.901l95.357 95.357c5.858 5.858 15.355 5.858 21.213 0l95.357-95.357c29.749-29.748 29.749-78.153.001-107.901z" />
                                    </svg>

                                    <p>
                                        Support HopeAid: Donate to empower futures through education!</p>
                                </div>
                                <div className="flex max-w-xs space-x-2 px-4">

                                    <svg className='-mt-1 w-auto md:h-[50px] h-[31px]' fill="#068278" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 470 470" xml:space="preserve">
                                        <g>
                                            <path d="M385.463,72.447c0-4.142-3.357-7.5-7.5-7.5h-70c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h70 C382.106,79.947,385.463,76.589,385.463,72.447z" />
                                            <path d="M302.306,56.514h75.657c4.143,0,7.5-3.358,7.5-7.5V22.883C385.463,10.265,375.198,0,362.58,0h-57.306 c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h57.306c4.347,0,7.883,3.536,7.883,7.883v18.631h-68.157c-4.143,0-7.5,3.358-7.5,7.5 S298.163,56.514,302.306,56.514z" />
                                            <path d="M407.239,130.212l-27.929-22.057V95.88c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v15.909 c0,2.295,1.051,4.463,2.852,5.886l30.781,24.309c4.825,3.81,9.22,12.88,9.22,19.03v52.797h-62.5c-4.143,0-7.5,3.358-7.5,7.5 s3.357,7.5,7.5,7.5h62.5v45.297h-62.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h62.5v105.594h-62.5 c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h62.5v22.032c0,12.829-10.437,23.266-23.266,23.266h-47.763 c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h47.763c21.1,0,38.266-17.166,38.266-38.266v-270.72 C422.162,150.171,415.746,136.929,407.239,130.212z" />
                                            <path d="M344.662,349.406h40c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-40c-4.143,0-7.5,3.358-7.5,7.5 S340.52,349.406,344.662,349.406z" />
                                            <path d="M344.662,168.514h40c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-40c-4.143,0-7.5,3.358-7.5,7.5 S340.52,168.514,344.662,168.514z" />
                                            <path d="M92.038,79.947h70c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-70c-4.142,0-7.5,3.358-7.5,7.5 S87.896,79.947,92.038,79.947z" />
                                            <path d="M92.038,56.514h75.657c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H99.538V22.883c0-4.347,3.536-7.883,7.883-7.883 h57.305c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-57.305C94.803,0,84.538,10.265,84.538,22.883v26.131 C84.538,53.156,87.896,56.514,92.038,56.514z" />
                                            <path d="M133.866,455H86.103c-12.829,0-23.266-10.437-23.266-23.266v-82.329h62.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5 h-62.5V228.811h62.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-62.5v-52.797c0-6.149,4.395-15.22,9.221-19.031l30.781-24.308 c1.801-1.422,2.852-3.591,2.852-5.886V95.88c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v12.275l-27.929,22.056 c-8.508,6.719-14.924,19.961-14.924,30.803v270.72c0,21.1,17.166,38.266,38.266,38.266h47.763c4.142,0,7.5-3.358,7.5-7.5 S138.008,455,133.866,455z" />
                                            <path d="M125.338,394.703h-40c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5 S129.48,394.703,125.338,394.703z" />
                                            <path d="M125.338,274.108h-40c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5 S129.48,274.108,125.338,274.108z" />
                                            <path d="M85.338,153.514c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H85.338z" />
                                            <path d="M192.038,79.947h85.925c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-85.925c-4.142,0-7.5,3.358-7.5,7.5 S187.896,79.947,192.038,79.947z" />
                                            <path d="M192.038,56.514h85.925c4.143,0,7.5-3.358,7.5-7.5V22.883C285.463,10.265,275.198,0,262.58,0h-55.16 c-12.618,0-22.883,10.265-22.883,22.883v26.131C184.538,53.156,187.896,56.514,192.038,56.514z M199.538,22.883 c0-4.347,3.536-7.883,7.883-7.883h55.16c4.347,0,7.883,3.536,7.883,7.883v18.631h-70.925V22.883z" />
                                            <path d="M307.239,130.212l-27.929-22.057V95.88c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v15.909 c0,2.295,1.051,4.463,2.852,5.886l30.781,24.309c3.065,2.42,5.951,6.962,7.653,11.53h-141.19c1.702-4.568,4.588-9.11,7.654-11.531 l30.781-24.308c1.801-1.422,2.852-3.591,2.852-5.886V95.88c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v12.275l-27.929,22.056 c-8.508,6.719-14.924,19.961-14.924,30.803v270.72c0,21.1,17.166,38.266,38.266,38.266h97.793c21.1,0,38.266-17.166,38.266-38.266 v-270.72C322.162,150.171,315.746,136.929,307.239,130.212z M185.338,228.811h121.825v45.297H162.838V168.514h144.325v45.297 H185.338c-4.142,0-7.5,3.358-7.5,7.5S181.196,228.811,185.338,228.811z M162.838,289.108h144.325v45.297H162.838V289.108z M283.897,455h-97.793c-12.829,0-23.266-10.437-23.266-23.266v-22.032h22.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-22.5 v-45.297h144.325v82.329C307.162,444.563,296.726,455,283.897,455z" />
                                            <path d="M284.662,394.703h-69.325c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h69.325c4.143,0,7.5-3.358,7.5-7.5 S288.805,394.703,284.662,394.703z" />
                                        </g>
                                    </svg>

                                    <p>Clean water changes everything.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                            </svg>
                            <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none ">

                                <img className="-mb-20 w-[530px] h-[600px] object-cover" src={Clean_Water_Image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-blue-40 text-blue-800 mb-[120px]">
                <div className="mx-auto flex max-w-screen-xl flex-col px-4 sm:flex-row sm:px-8 lg:px-20">
                    <div className="mt-20 flex flex-col sm:w-2/3 sm:pr-10">
                        <div>
                            <p className="mb-2 hidden h-1.5 w-14 bg-[#30978E] sm:block"></p>
                            <h1 className="block whitespace-nowrap text-center text-4xl font-black text-gray-800 sm:text-left">Donation Chart</h1>
                        </div>
                        <div id="chart">
                            <ReactApexChart options={options} series={series} type="line" height={350} />
                        </div>
                        <p className="hidden text-gray-600 sm:block">
                            Your donations have made these things possible Penny Appeal are members of the Fundraising Regulator and commit to follow the Code of Fundraising Practice and the Fundraising Promise.
                        </p>
                    </div>
                    <div className="mt-8 flex-col items-end space-y-3 rounded-xl px-4 py-4 sm:w-1/3 md:ml-auto lg:flex">
                        <div className="bg flex w-full flex-col items-center justify-center rounded-xl bg-[#30978E] px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
                            <div className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">5420</p>
                                <p className="text-sm">Total Donate</p>
                            </div>
                        </div>
                        <div className="bg flex w-full flex-col items-center justify-center rounded-xl bg-[#30978E] px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
                            <div className="p-3">
                            <svg className="h-6 w-6" fill="#FFFFFF" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 470 470" xml:space="preserve">
                                    <g>
                                        <path d="M385.463,72.447c0-4.142-3.357-7.5-7.5-7.5h-70c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h70 C382.106,79.947,385.463,76.589,385.463,72.447z" />
                                        <path d="M302.306,56.514h75.657c4.143,0,7.5-3.358,7.5-7.5V22.883C385.463,10.265,375.198,0,362.58,0h-57.306 c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h57.306c4.347,0,7.883,3.536,7.883,7.883v18.631h-68.157c-4.143,0-7.5,3.358-7.5,7.5 S298.163,56.514,302.306,56.514z" />
                                        <path d="M407.239,130.212l-27.929-22.057V95.88c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v15.909 c0,2.295,1.051,4.463,2.852,5.886l30.781,24.309c4.825,3.81,9.22,12.88,9.22,19.03v52.797h-62.5c-4.143,0-7.5,3.358-7.5,7.5 s3.357,7.5,7.5,7.5h62.5v45.297h-62.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h62.5v105.594h-62.5 c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h62.5v22.032c0,12.829-10.437,23.266-23.266,23.266h-47.763 c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h47.763c21.1,0,38.266-17.166,38.266-38.266v-270.72 C422.162,150.171,415.746,136.929,407.239,130.212z" />
                                        <path d="M344.662,349.406h40c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-40c-4.143,0-7.5,3.358-7.5,7.5 S340.52,349.406,344.662,349.406z" />
                                        <path d="M344.662,168.514h40c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-40c-4.143,0-7.5,3.358-7.5,7.5 S340.52,168.514,344.662,168.514z" />
                                        <path d="M92.038,79.947h70c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-70c-4.142,0-7.5,3.358-7.5,7.5 S87.896,79.947,92.038,79.947z" />
                                        <path d="M92.038,56.514h75.657c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H99.538V22.883c0-4.347,3.536-7.883,7.883-7.883 h57.305c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-57.305C94.803,0,84.538,10.265,84.538,22.883v26.131 C84.538,53.156,87.896,56.514,92.038,56.514z" />
                                        <path d="M133.866,455H86.103c-12.829,0-23.266-10.437-23.266-23.266v-82.329h62.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5 h-62.5V228.811h62.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-62.5v-52.797c0-6.149,4.395-15.22,9.221-19.031l30.781-24.308 c1.801-1.422,2.852-3.591,2.852-5.886V95.88c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v12.275l-27.929,22.056 c-8.508,6.719-14.924,19.961-14.924,30.803v270.72c0,21.1,17.166,38.266,38.266,38.266h47.763c4.142,0,7.5-3.358,7.5-7.5 S138.008,455,133.866,455z" />
                                        <path d="M125.338,394.703h-40c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5 S129.48,394.703,125.338,394.703z" />
                                        <path d="M125.338,274.108h-40c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5 S129.48,274.108,125.338,274.108z" />
                                        <path d="M85.338,153.514c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H85.338z" />
                                        <path d="M192.038,79.947h85.925c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-85.925c-4.142,0-7.5,3.358-7.5,7.5 S187.896,79.947,192.038,79.947z" />
                                        <path d="M192.038,56.514h85.925c4.143,0,7.5-3.358,7.5-7.5V22.883C285.463,10.265,275.198,0,262.58,0h-55.16 c-12.618,0-22.883,10.265-22.883,22.883v26.131C184.538,53.156,187.896,56.514,192.038,56.514z M199.538,22.883 c0-4.347,3.536-7.883,7.883-7.883h55.16c4.347,0,7.883,3.536,7.883,7.883v18.631h-70.925V22.883z" />
                                        <path d="M307.239,130.212l-27.929-22.057V95.88c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v15.909 c0,2.295,1.051,4.463,2.852,5.886l30.781,24.309c3.065,2.42,5.951,6.962,7.653,11.53h-141.19c1.702-4.568,4.588-9.11,7.654-11.531 l30.781-24.308c1.801-1.422,2.852-3.591,2.852-5.886V95.88c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v12.275l-27.929,22.056 c-8.508,6.719-14.924,19.961-14.924,30.803v270.72c0,21.1,17.166,38.266,38.266,38.266h97.793c21.1,0,38.266-17.166,38.266-38.266 v-270.72C322.162,150.171,315.746,136.929,307.239,130.212z M185.338,228.811h121.825v45.297H162.838V168.514h144.325v45.297 H185.338c-4.142,0-7.5,3.358-7.5,7.5S181.196,228.811,185.338,228.811z M162.838,289.108h144.325v45.297H162.838V289.108z M283.897,455h-97.793c-12.829,0-23.266-10.437-23.266-23.266v-22.032h22.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-22.5 v-45.297h144.325v82.329C307.162,444.563,296.726,455,283.897,455z" />
                                        <path d="M284.662,394.703h-69.325c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h69.325c4.143,0,7.5-3.358,7.5-7.5 S288.805,394.703,284.662,394.703z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">54550</p>
                                <p className="text-sm">Clean Water Bottle Supply</p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>

    );
};

export default CleanWater;