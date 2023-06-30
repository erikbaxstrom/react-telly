import styled, { keyframes } from "styled-components"
import { SPACING, COLORS } from "../../utils/style/constants"

const FRAME_HEIGHT: number = 180
const FRAME_WIDTH: number = 280

export const ViewerWrapper = styled.div`
	position: relative;
	width: ${FRAME_WIDTH}px;
	padding: ${SPACING.l} 0;
	margin: ${SPACING.m} 0 30px;
`

export const ViewerFrame = styled.div`
	position: relative;
	height: ${FRAME_HEIGHT}px;
	box-shadow: 0 0 0 ${SPACING.m} ${COLORS.primary_mahogany};
`

export const Antennae = styled.div`
	position: absolute;
	width: 60px;
	height: 60px;
	transform: rotate(-45deg);
	top: -50px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	border-left: ${SPACING.xs} solid ${COLORS.neutral_gray};
	border-bottom: ${SPACING.xs} solid ${COLORS.neutral_gray};
`

export const NoSignalText = styled.p`
	position: absolute;
	margin: auto;
	color: ${COLORS.neutral_white};
	background-color: ${COLORS.neutral_black};
	padding: ${SPACING.xs};
	width: 180px;
	height: 20px;
	text-align: center;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`

export const NoSignalColorWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`

export const NoSignalColorBar = styled.div`
	width: 25%;

	&:first-child {
		background-color: ${COLORS.primary_fuchsia};
	}

	&:nth-child(2) {
		background-color: ${COLORS.primary_freesia};
	}

	&:nth-child(3) {
		background-color: ${COLORS.primary_blue_green};
	}

	&:last-child {
		background-color: ${COLORS.primary_coral};
	}
`

export const Gif = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`

export const Feet = styled.div`
	width: ${SPACING.xl};
	height: ${SPACING.m};
	border-right: ${SPACING.m} solid ${COLORS.primary_mahogany};
	border-left: ${SPACING.m} solid ${COLORS.primary_mahogany};
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
`

export const LoadingWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const blinkPixel = keyframes`
	0% { opacity: 0; }
	100% { opacity: 100; }
`
export const BlinkPixel = styled.div<{ color: string; time: number }>`
	height: ${SPACING.s};
	width: ${SPACING.s};
	background-color: ${(props) => props.color};
	-webkit-animation-name: ${blinkPixel};
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-duration: ${(props) => props.time}s;
`
