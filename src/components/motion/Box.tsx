import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Merge } from 'types/merge';

type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

export default MotionBox;
