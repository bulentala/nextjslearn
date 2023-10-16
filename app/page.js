"use client";
import { Grid, Text, Box, DecorativeBox, Flex } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <>
      <Grid columns='1' size={{ initial: "3", md: "5", xl: "7" }}>
        <Flex justify='between'>
          <Box className='border border-red-500'>LOGO</Box>
          <Box className='border border-red-500'>MENU</Box>
        </Flex>

        <Box className='border border-red-500'>Main</Box>
        <Box className='border border-red-500'>Footer</Box>
      </Grid>
    </>
  );
};

export default HomePage;
