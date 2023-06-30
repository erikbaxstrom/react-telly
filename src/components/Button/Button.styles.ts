import styled from "styled-components"
import { COLORS, SPACING, FONT_SIZES } from "../../utils/style/constants"

export const StyledButton = styled.button`
	display: block;
	margin: 0 auto;
	padding: ${SPACING.s};
	border: ${SPACING.xs} solid ${COLORS.primary_freesia};
	border-radius: ${SPACING.s};
	background-color: ${COLORS.primary_blue_green};
	color: ${COLORS.neutral_white};
	font-size: ${FONT_SIZES.standard};
	font-family: unset;
	font-weight: 600;
	cursor: pointer;
	transition: background-color 0.3s ease;
	transition: border-style 0.5s ease;

	&:hover {
		background-color: ${COLORS.primary_coral};
	}

	&:focus {
		outline: 1px solid ${COLORS.primary_fuchsia};
	}
`
