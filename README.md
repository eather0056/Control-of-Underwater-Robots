# BlueROV Control Systems Implementation

## Overview
This repository contains the code and experimental results from practical work conducted on the BlueROV within the COSMER Lab water tank at the University of Toulon. The project aimed to implement and evaluate different control strategies, ranging from Proportional (P) to Proportional Integral Derivative (PID) controllers, including trajectory generation and disturbance handling. The work was carried out under the supervision of Prof. Vincent Hugel from the University of Toulon and Prof. Vincent Creuze from the University of Montpellier.

## Table of Contents
- [Introduction](#introduction)
- [Setup](#setup)
- [Experiments](#experiments)
- [Results](#results)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

## Introduction
The BlueROV is an open-source underwater vehicle designed for researchers and hobbyists alike. Controlling such a vehicle poses unique challenges due to the fluid dynamics and external disturbances present in an underwater environment. This repository documents our approach to implementing various control strategies to manage these challenges effectively.

## Setup
- **Hardware**: BlueROV platform with integrated sensors and thrusters.
- **Environment**: COSMER Lab water tank, University of Toulon.
- **Control Algorithms**: Implemented in Python/C++ (as applicable).

## Experiments
- **P Controllers**: Initial implementation of proportional control for depth and yaw.
- **PI Controllers**: Integration of the integral component to mitigate steady-state errors.
- **PID Controllers**: Incorporation of the derivative component for predictive control.
- **Trajectory Generation**: Designing trajectories that consider the ROV's dynamics.
- **Disturbance Handling**: Testing the robustness of control systems against manual disturbances.
- **Filtering**: Using an alpha-beta filter to estimate the heave from depth measurements.

## Results
Results from each experiment, including plots and observations, are located in the `results` folder. The data includes depth and yaw control responses, robustness to disturbances, and the effectiveness of the alpha-beta filter.

## Conclusion
The practical work has provided valuable insights into the control of underwater vehicles. Each control strategy was dissected and understood through a series of methodical experiments, revealing both the potential and limitations of the controllers within the context of underwater navigation and stability.

## Acknowledgments
Special thanks to Prof. Vincent Hugel and Prof. Vincent Creuze for their guidance and supervision throughout this project. Their expertise in the field has been invaluable to the success of this practical work.

## How to Use This Repository
Detailed instructions on how to run the experiments and analyze the results can be found in the [Documentation](/Documentation).

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
- **Student**: 
  - Md Ether Deowan 
  - Md Shamin Yeasher Yousha 
  - Shahriar Hassan 
  - Tihan Mahmud Hossain 
  - Akshat Sinha 
  - Krittapat Onthuam 
- **Supervisors**: 
  - Prof. Vincent Hugel - [vincent.hugel@univ-tln.fr](mailto:vincent.hugel@univ-tln.fr)
  - Prof. Vincent Creuze - [vincent.creuze@umontpellier.fr](mailto:vincent.creuze@umontpellier.fr)
