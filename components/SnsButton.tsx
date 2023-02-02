import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaBlog, FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';
  import { ReactNode } from 'react';

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        target={'_blank'}
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={12}
        h={12}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  
  export default function SnsButton() {
    return (
        <Stack direction={'row'} display={'flex'} align={'center'} spacing={6} justify={'center'} w={'full'}>
        <SocialButton label={'Line'} href={'https://lin.ee/mKunhOU'}>
          <FaLine size={'24'} />
        </SocialButton>
        <SocialButton label={'Facebook'} href={'https://www.facebook.com/profile.php?id=100045123254100'}>
          <FaFacebook size={'24'} />
        </SocialButton>
        <SocialButton label={'Instagram'} href={'http://Instagram.com/bright_feelings_'}>
          <FaInstagram size={'24'} />
        </SocialButton>
        <SocialButton label={'Blog'} href={'https://ameblo.jp/cskeiko/'}>
          <FaBlog size={'24'} />
        </SocialButton>
      </Stack>
    );
  }