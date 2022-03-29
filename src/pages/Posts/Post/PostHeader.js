import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button.d';

export function PostHeader({ post, onRemove }) {
  return (
    <>
      <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
      <Button
        onClick={() => onRemove(post.id)}
        post={{
          id: post.id,
        }}
      >
        Remover
      </Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
